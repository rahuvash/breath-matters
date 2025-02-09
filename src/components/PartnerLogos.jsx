import React from "react";

export default function PartnerLogos() {
  const logos = [
    {
      src: "https://s3-alpha-sig.figma.com/img/3af5/511d/5fb172511ac46a995a3c7f83f61f7729?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FzdvX~M5q3BOGh3s0BNOv5qApFrPXx7yrzk0cRbzU-8xvNc0syIMs769rkPNyMt06OBpod6hgmbCNvKlgiR9fa-eRDheBRrOr3~PDoiPzA74NB2UJmRhXqkDWkvybj6eNNBYRrm5slEz~uEYqRKdb8hwG00-vYwPEetxzvOqqjC1CUPYB3u8r3vd6sAVfmt~K~E43tgAP1KQgV6WcxCSXg2bslMWSAWHmcilFd2KBgB6gHPRv9umqEVPcA1XW2cINqNC6Bwo2e-SxL-g3hMhWOoleSgnNiG2Ks9Mh7MdyctLxnAOEWcdFWHxC66AzA6t0wOJPhWLFeZJJHhq-NzdRA__",
      alt: "KNOSIS - Physiotherapy & Wellness",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/2cf0/ab05/9958dcf5556523fa5bbde93e842c68ee?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rfCInuE~6GO2ysXwDK83RJfSLhukMazeBmFhBhjJW7Hdb0TUpV5bn4WiLvEXBNcTgYeLa5pjRBx2fLN4Dwe~nWECUmPxbPy--jhjuaG1Rt3AiDFPcOnfAPTD8NJ-5u9p2t0LZA7QfqTskuj2~guGE8ev5X5WULOnSFejME-lj2qO-Rchw37FfFZpkP~9EyEOuwA~C5NQnyWaUKrYoX7jMcKFKsNPgxDaGaLYUXzHiP8ySNnSELFAiC5qKvNyfoft0eL40yi7nswG9qYDnN-8Dr0LgHPEjcfAKJFOa7jefwxKtGjQzBjyDTYmgAPu0KYifS4u-9vr0rEbwrIwQI~S-Q__",
      alt: "Medical Professional Services",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/db47/0067/266bfc7530576dc27c53d244585dc225?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AnG6MY2iyrvK1jImTelyjXsJYNmIjuFZEMxdONDD3Kv1Eu-IU1E~4qLE2ZnD1hBgHXTobIFo4SpvDC34jwYdlBTTXpWKZOncZRNGb2btqN2f-CvTiGmA6vJ8YsE3L7eSwB0unZvbD7jhseXJqjifsYZPXRt0NQnOFpkh7Dzlk254tqlf0eiXuyYIKeJkU~HDRWroaAeodNCgBumANcesJ2nChUDv7OMlEBIwWdvZr9s59UJxTmYKIio3m1xsa6Ud79afTNKo13AYJP8ZxxiokwwqJdS5rwJl00BwRLSr8Ua8hV2IH6w70emEHiaJqTrd-XWLC6wS53hyV3GXw~aFnQ__",
      alt: "Airway Collaborative - Breathe Sleep, Be Well",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/58d9/a9f3/f5f7a0f92eb09d74b3a4bada8c543482?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pF3aPGhij1OlEiwWZAJPZbyz61HZRROQGUV2JRM2H7NnJUgcdpHIrxgX7wpj-IiLmX7uKhpWspGSfof9pdYfoXFeLaELHHdhNrDgVb6qP8jnTnbNnpL2SWe1Owp0T1an7aiDnl9dKKokdsOxD0frFrLdgMf9Q1B5oDN61RDq-knFyMYqkgO7bu2MO-EVSP2HydQLdXqKaCbGsRtQm~rG5ECRrUFHO9LRkswJcw3y-FFBWwq1Fzm85UFRGbOAMifXjQSdvLW9KIb1O9JmJz2nzED1RU7MnRZQsHAHIpEqsmIcfNBlHncPTy0TYNqDahW7IF1Xeqbd9cvZ1XysxSEjBQ__"
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <div key={index} className="w-48">
              <img
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
