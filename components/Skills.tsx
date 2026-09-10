"use client";
import { FiPlay, FiPause } from "react-icons/fi";


import { useState } from "react";
import {
  SiShopify,
  SiFramer,
  SiWordpress,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiGit,
  SiPhp,
} from "react-icons/si";
const skills = [
  { name: "Shopify", Icon: SiShopify, color: "#658d36" },
  { name: "Framer", Icon: SiFramer, color: "#171717" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759b" },
  { name: "HTML5", Icon: SiHtml5, color: "#dc4c25" },
  { name: "CSS3", Icon: SiCss, color: "#2862e9" },
  { name: "JavaScript", Icon: SiJavascript, color: "#a58700" },
  { name: "React", Icon: SiReact, color: "#087ea4" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#171717" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#0891b2" },
  { name: "Laravel", Icon: SiLaravel, color: "#ef4035" },
  { name: "PHP", Icon: SiPhp, color: "#6879ac" },
  { name: "MySQL", Icon: SiMysql, color: "#00758f" },
  { name: "Git", Icon: SiGit, color: "#e84d31" },
];
export function TechnologyStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="tech-marquee"
      aria-label="Shopify, Framer, WordPress, React, Next.js, JavaScript and Laravel"
    >
      <div
        className="tech-track"
        aria-hidden="true"
        style={{ animationPlayState: paused ? "paused" : undefined }}
      >
        {[0, 1, 2].map((copy) => (
          <div className="tech-group" key={copy}>
            {skills
              .filter((_, i) => [0, 1, 2, 5, 6, 7, 10].includes(i))
              .map(({ name, Icon, color }) => (
                <div className="tech-tile" key={name}>
                  <Icon style={{ color }} />
                </div>
              ))}
          </div>
        ))}
      </div>
      <button
        className="motion-toggle"
        aria-label={
          paused ? "Play technology animation" : "Pause technology animation"
        }
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? (<FiPlay className="inline-icon" aria-hidden="true" focusable="false" />) : (<FiPause className="inline-icon" aria-hidden="true" focusable="false" />)}
      </button>
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Tech stack</span>
          <h2>Tools I build with.</h2>
          <p>From custom storefronts to websites your team can manage.</p>
        </div>
        <div className="skill-list">
          {skills.map(({ name, Icon, color }) => (
            <span className="skill-pill" key={name}>
              <Icon style={{ color }} aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
