import { internal } from "./_generated/api";
import { internalMutation, mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveSketch = mutation({
  args: { prompt: v.string(), image: v.string() },
  handler: async (ctx, { prompt, image }) => {
    const sketch = await ctx.db.insert("sketches", {
      prompt,
    });

    await ctx.scheduler.runAfter(0, internal.generate.generate, {
      sketchId: sketch,
      prompt,
      image,
    });

    return sketch;
  },
});

export const getSketch = query({
  args: { sketchId: v.id("sketches") },
  handler: (ctx, { sketchId }) => {
    if (!sketchId) return null;
    return ctx.db.get(sketchId);
  },
});

export const updateSketchResult = internalMutation({
  args: { sketchId: v.id("sketches"), result: v.string() },
  handler: async (ctx, { sketchId, result }) => {
    await ctx.db.patch(sketchId, {
      result,
    });
  },
});

export const getSketches = query({
  handler: async (ctx) => {
    const sketches = await ctx.db.query("sketches").collect();
    return sketches;
  },
});
