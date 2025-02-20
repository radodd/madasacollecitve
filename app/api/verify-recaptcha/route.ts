// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     return res
//       .status(405)
//       .json({ success: false, message: "Method Not Allowed" });
//   }

//   const body = JSON.parse(req.body); // <-- Parse JSON correctly
//   const { token } = body;
//   const secretKey = process.env.RECAPTCHA_SECRET_KEY;

//   if (!token) {
//     return res
//       .status(400)
//       .json({ success: false, message: "reCAPTCHA token missing" });
//   }

//   const response = await fetch(
//     `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
//     { method: "POST" }
//   );

//   const data = await response.json();

//   if (data.success) {
//     return res.status(200).json({ success: true });
//   } else {
//     return res
//       .status(400)
//       .json({ success: false, message: "reCAPTCHA verification failed" });
//   }
// }
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json(); // ✅ Correct way to parse JSON body
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
