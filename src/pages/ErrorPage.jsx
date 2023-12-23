import React from "react";

function ErrorPage() {
  return (
    <div className="p-6 flex h-screen flex-col justify-center gap-4">
      <h1 className="border-b-2 pb-2 font-semibold text-lg">
        Oops, you enter wrong data
      </h1>
      <div className="flex flex-col gap-2">
        <p>
          Sorry 😞, it seems like you write Karimme but my Secret Santa name is{" "}
          <b>RITA</b>.
        </p>
        <p>Please found the gift who is hidden below the big picture
          in the living room, just behind the orange seat in the big hole that
          no one knows why they made it.</p>
        <p>
          After that give it to Rita because she can't read these instructions
          and thanks for the help :D
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
