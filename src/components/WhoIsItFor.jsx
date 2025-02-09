import React from "react";

const WhoIsItFor = () => {
  const userGroups = [
    {
      title: "Wellness Enthusiasts",
      description:
        "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
      image:
        "https://s3-alpha-sig.figma.com/img/9706/d335/cbf2d02cc7f79c9e6e2138ac186bf1d1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SKo0rsxoId-1qEob7blWhWFmXgGQCDoQ0UrMygzLzC3tCymTfOAvQtzfRNvhBaAfmER8L4KlLmB2c5zZl2M8mwgZ5Sx8H1hjMGgnzRlElcMs9EW8IzFsC7iIuz2NfOvWcJ9qLnQRPE4nbZCUqxLSOgaXW1yLeORWB1iWeX6a67cNzgb4v-jj9wa4xySNEmH4o0IE4rIfsiIofaV9Uj3-Aj-hKZwtTEP7709lc22WPMQoHwGmiPG2YUtysfvReYjJG6YGIGQ79KrgUBdaTsz6UR~c7LxRlLDFEPzbrBwUiMb7Gl0AEtB~vSORf0cLLvU3z2gZ5WDb2oquAj-oUyKEaQ__",
    },
    {
      title: "Health Practitioners",
      description:
        "Provide clients with revolutionary breathing behavior analysis for lasting results.",
      image:
        "https://s3-alpha-sig.figma.com/img/efe0/ca20/0c4fd77942196034cda58279d9aae589?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I0A0hINHxURC91Ehhvqln0hjs-gcwrCWTO9hsCpFvC3LstSZDlCYHe4Jsh9aRfeGZ~8bwzYACAe5FKqA~gcTfhBgaGnde6wSgyFVNQr-8dEgvNYQGwoO5mN6hZSEfILEFQLPM1j6BzMofIHToOTsbT1SVrVK0Tf8XJu4tIeipa0OsrsIFI0sPfoKqJIqsQ0EUB5FxwHMOLb53iXRmwQmutP7Lwpe811dezje1Dck9YPuB3D~laKOFjIyoCC-t4OYkzNGBJtu4-zRm1QL-8OotpyeCE6lQnt1tOUeeN1B0AI07m--V-oj7pbcmWTQUe13oGP~A5DNmpXh9qMNird0hQ__",
    },
    {
      title: "Athletes & Performers",
      description: "Boost endurance, focus, and physical resilience.",
      image:
        "https://s3-alpha-sig.figma.com/img/f39d/41b9/21e50f6c4581602a5afb5c3d82025e6c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VLPxRm-l8pQDLeuRCLGjLadVbYAccTVxWMPJtUO3HFT9BrPHXUobCC1rM~JHanCyGsgX~dj-9rwkT5TvMI6MsJHMgI4IEWlbKjqPq~n1h9i7nfLUrTUVi1I9hF9nyVChYiKUimB1mLWbQzQNYxPD8xSau3sXTq~Ch7yVYttLLtY~yQ334Q2t4Osrl-4UudorAkWYhQG-6Nj2sBs01IWG1lbdDHX1jKBXG534skYTUQ4pj~N8TWh7QbZG0nD3paGPa0xpoy528~ReOGD-F9YgkIkHlzLh4zB3njvJnB1Pkt2rYENxxIKmp82PcAoi-H6LNaCIQxzRh6THkCxWXbqYhw__",
    },
  ];

  return (
    <div className="bg-[#f0f7f7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          WHO IS THE CAPNOTRAINER® GO FOR?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {userGroups.map((group, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-teal-600 flex flex-col items-center justify-center text-center text-white p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
                <p className="text-white/90">{group.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoIsItFor;