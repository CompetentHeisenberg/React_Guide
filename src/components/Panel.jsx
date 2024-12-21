import React from "react";
import panel from "../css/panel.module.css";
function Panel() {
  return (
    <div className={panel.main}>
      <div className={panel.info}>
        <label className={panel.title}>Theme: Test</label>
        <hr className={panel.cher}></hr>
        <p className={panel.text}>
          The rapid advancements in technology over the past few decades have
          profoundly transformed the way we live, work, and communicate. From
          the advent of the internet to the proliferation of smartphones, each
          new innovation has brought with it a series of challenges and
          opportunities. In the modern world, connectivity is no longer a luxury
          but a necessity. People rely on digital tools not only for
          entertainment and social interactions but also for education,
          healthcare, and even basic communication. For instance, during the
          global pandemic, millions of people turned to online platforms to
          continue their education and maintain business operations. Students
          attended virtual classes, workers embraced remote jobs, and families
          stayed connected through video calls despite being miles apart.
          However, the same technological advancements have raised concerns
          about data privacy, cybersecurity, and the ethical implications of
          artificial intelligence. Artificial intelligence, in particular, has
          become a double-edged sword. While it has the potential to
          revolutionize industries, improve efficiency, and create new
          possibilities, it also poses risks of job displacement and the misuse
          of sensitive information. The challenge lies in balancing
          technological progress with the ethical considerations that come with
          it. Governments and organizations worldwide are grappling with how to
          regulate AI and ensure it benefits humanity as a whole. Moreover,
          technology's impact on mental health cannot be ignored. Social media,
          while providing a platform for connection and self-expression, has
          also been linked to issues such as anxiety, depression, and a
          distorted sense of reality. Many individuals find themselves comparing
          their lives to the curated, idealized versions of others' lives that
          they see online. This phenomenon has sparked conversations about
          digital well-being and the importance of taking breaks from
          technology. On the other hand, technology has empowered countless
          individuals to start their own businesses, access knowledge previously
          out of reach, and raise awareness about social issues. The digital age
          has democratized information, making it possible for anyone with an
          internet connection to learn new skills, build communities, and
          advocate for change. As we look to the future, the role of technology
          in shaping society will only grow more significant. Innovations like
          quantum computing, biotechnology, and renewable energy solutions hold
          the promise of addressing some of the world's most pressing problems,
          such as climate change, disease prevention, and resource scarcity.
          However, these advancements also require careful stewardship to ensure
          they are used responsibly and inclusively. In conclusion, technology
          is both a tool and a challenge, a source of incredible progress and a
          reason for caution.
        </p>
      </div>
    </div>
  );
}

export default Panel;
