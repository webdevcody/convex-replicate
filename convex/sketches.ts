import { Id } from "./_generated/dataModel";
import { internalMutation, mutation, query } from "./_generated/server";

export const saveSketch = mutation(
  async (
    { db, scheduler },
    { prompt, image }: { prompt: string; image: string }
  ) => {
    const sketch = await db.insert("sketches", {
      prompt,
    });

    await scheduler.runAfter(0, "generate:generate", {
      sketchId: sketch.id,
      prompt,
      image,
    });

    return sketch;
  }
);

export const getSketch = query(({ db }, { sketchId }: { sketchId: string }) => {
  if (!sketchId) return null;
  return db.get(new Id("sketches", sketchId));
});

export const updateSketchResult = internalMutation(
  async (
    { db },
    { sketchId, result }: { sketchId: string; result: string }
  ) => {
    const id = new Id("sketches", sketchId);
    console.log("id", id);
    console.log("result", result);
    await db.patch(id, {
      result,
    });
  }
);

export const getSketches = query(async ({ db }) => {
  const sketches = await db.query("sketches").collect();
  return sketches;
});
