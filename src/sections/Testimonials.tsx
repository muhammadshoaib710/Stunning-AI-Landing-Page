import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl text-center tracking-tighter font-medium">Beyond Expectation</h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight" >
          Our revolutionary AI tools have transformed our clients' strategies
        </p>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]">
            <div>{testimonial.text}</div>
            <Image
              src={testimonial.avatarImg}
              alt={`Avatar for ${testimonial.name}`}
            />
            <div>{testimonial.name}</div>
            <div>{testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
