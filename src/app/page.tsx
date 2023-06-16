"use client";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "../../convex/_generated/react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef, useState } from "react";

export default function Home() {
  const [sketchId, setSketchId] = useState("");
  const saveSketchMutation = useMutation("sketches:saveSketch");
  const sketchQuery = useQuery("sketches:getSketch", {
    sketchId,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    prompt: string;
  }>();

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-4">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(async (formData) => {
            if (!canvasRef.current) return;
            const image = await canvasRef.current.exportImage("jpeg");
            const results = await saveSketchMutation({ ...formData, image });
            setSketchId(results.id);
          })}
        >
          <input
            className="text-black"
            {...register("prompt", { required: true })}
          />
          {errors.prompt && <span>This field is required</span>}

          <ReactSketchCanvas
            ref={canvasRef}
            style={{ width: 256, height: 256 }}
            strokeWidth={4}
            strokeColor="black"
          />

          <input className="bg-blue-400 rounded" type="submit" />
        </form>
        {sketchQuery && (
          <img width="256" height="256" src={sketchQuery.result} />
        )}
      </div>
    </main>
  );
}
