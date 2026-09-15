export default async (req) => {
  try {
    if (req.method === "GET") {
      return Response.json({
        ok: true,
        message: "DCB OS AI Design Engine is online.",
        model: "gpt-image-2.5-sunburst"
      });
    }

    if (req.method !== "POST") {
      return Response.json(
        { ok: false, error: "POST required." },
        { status: 405 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { ok: false, error: "OPENAI_API_KEY is missing." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const instruction = body.instruction?.trim();

    if (!instruction) {
      return Response.json(
        { ok: false, error: "Tell Jarvis what to design." },
        { status: 400 }
      );
    }

    const designPrompt = `
You are the DCB OS architectural visualization engine.

Create a realistic residential construction design concept based on
Dallas's instruction.

Instruction:
${instruction}

Priorities:
- realistic buildable construction
- preserve existing structures unless explicitly told to change them
- accurate-looking proportions
- premium California mountain contractor aesthetic
- heavy timber, stone, metal roofing and natural materials when appropriate
- no text, labels, dimensions, logos or watermarks in the image
- photorealistic presentation
`;

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-image-2.5-sunburst",
          prompt: designPrompt,
          size: "1536x1024",
          quality: "medium",
          n: 1
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI error:", data);

      return Response.json(
        {
          ok: false,
          error:
            data?.error?.message ||
            "OpenAI image generation failed."
        },
        { status: response.status }
      );
    }

    const image = data?.data?.[0];

    return Response.json({
      ok: true,
      instruction,
      image: image?.b64_json || null,
      url: image?.url || null
    });

  } catch (error) {
    console.error("DCB OS error:", error);

    return Response.json(
      {
        ok: false,
        error: error.message || "DCB OS Design Engine failed."
      },
      { status: 500 }
    );
  }
};
