export default async (req) => {
  if (req.method !== "POST") {
    return Response.json(
      { ok: true, message: "DCB OS Design Engine is online." },
      { status: 200 }
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { ok: false, error: "OPENAI_API_KEY is missing." },
      { status: 500 }
    );
  }

  return Response.json({
    ok: true,
    message: "DCB OS backend is connected and ready for AI."
  });
};
