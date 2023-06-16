"use client";

import { useQuery } from "../../../convex/_generated/react";

export default function Home() {
  const saveSketchMutation = useQuery("sketches:getSketches");

  const sortedSketches = (saveSketchMutation ?? []).sort((a, b) => {
    return b._creationTime - a._creationTime;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Recent Sketches</h2>
      <div className="grid grid-cols-4 gap-4">
        {sortedSketches.map((sketch) => (
          <img key={sketch._id} width="256" height="256" src={sketch.result} />
        ))}
      </div>
    </main>
  );
}
