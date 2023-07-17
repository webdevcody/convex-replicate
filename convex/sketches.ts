import { internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";
import { internalMutation, mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveSketch = mutation({
  args: {
    prompt: v.string(),
    image: v.string(),
  },
  handler: async ({ db, scheduler }, { prompt, image }) => {
    const sketch = await db.insert("sketches", {
      prompt,
    });

    await scheduler.runAfter(0, internal.generate.generate, {
      sketchId: sketch,
      prompt,
      image,
    });

    return sketch;
  },
});

export const getSketch = query(({ db }, { sketchId }: { sketchId: Id<"sketches"> }) => {
    if (!sketchId) return null;
    return db.get(sketchId);
  }
);

export const updateSketchResult = internalMutation(
  async (
    { db },
    { sketchId, result }: { sketchId: Id<"sketches">; result: string }
  ) => {
    await db.patch(sketchId, {
      result,
    });
  }
);

export const getSketches = query(async ({ db }) => {
  const sketches = await db.query("sketches").collect();
  return sketches;
});
