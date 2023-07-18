import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sketches: defineTable({
    prompt: v.string(),
    result: v.optional(v.string()),
  }),
});
