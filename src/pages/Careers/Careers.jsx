import React from "react";
import "./Careers.scss";

const Careers = () => {
  return (
    <div className="careers">
      <section className="hero-section">
        <div className="content">
          <div>
            <div className="topTag"> careers</div>
            <h1>Meet Our Team Of Industry Experts</h1>
          </div>
          <div>
            <p>
              Validate Your Business Ideas Through Rapid Experimentation And
              Real-World User Testing. Our Validation As A Service H
            </p>
            <div className="buttons">
              <button className="btn primary"> <a href="/application-form">See Open Positions</a></button>
              <button className="btn secondary">Meet The Team</button>
            </div>
          </div>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/4cfa/a10e/279e37e714967e78a503f4c316784e83?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGoS2iILXvrJ6WE29-IoyjInFuBLuqJAq57LSBV~v5Yh9nRPvvW1Zd1jl0sufTM-lWPsE0ysIHhn1iavbSCi8S4acRkg~lZE7zhwNorRuym8eSDCcwvmxbGObInt2~MYBbPnaAl8LeLoyjaPSxf2Ik0MbAf~G-n5NxThPj0GQfw9a4hKK4gObzOoZZT8PDvNWsvgqxPw-L2KvW3UgjviNH9LSxoxYQFeaVABCTHq7yl6eqddjh~74E~~TKsgbc~~ebWcaPVk1dVn7RZnxLIz-B2SLRnnl2g2TcAAdahxs6M2CoRJZklMbAjT6vjd~oyMb4FZQCMXOec1fATUg1GFkw__"
          alt="Team"
        />
      </section>

      <section className="who-we-are">
        <img
          src="https://s3-alpha-sig.figma.com/img/8879/c757/1c0e92f407d4afc19a1b703f105092e7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xv8Su4jzjUDnPtI7HMjD0hnYDjuOnaTDPjlKZkdgRaxty1Z60W02HWfhMSzhv4m2BBb5lZgz2wHA5tfnMB~XIRzL3b8iUN2GhZJ~I-2rcK~q5SA0phCiQP2miXcutSOIWzfG~uklokhD463qQe-8qn4cVzf1HnMr8bDZYw1V5aZJvgBQYoQDyKdVJmxh~CyJPXQeZH~O3xvU4zMJAp6b0l8OkWSuUsV9nLa1dQ28kBFheIcmAgLIP-WhcS7DuJw2mF1llrhgd2MBS20exxNcxE1kFDL9gw1XSYE7qSyj02h2wqiG0GgXWSq5OtN43qv~w2ZrKP5cgBBopYwg8riSgg__"
          alt="Who We Are"
        />
        <div className="text">
          <h2>Who We Are</h2>
          <p>
            Our team is full of oddballs and ambitious people. You’ll have fun,
            you’ll learn at high-speed and you’ll never want to leave. Are you a
            freelancer looking for exciting projects. We have them! You’ll have
            access to our training sessions and keep your modern marketing
            skillset as up-to-date as you possibly could. Learn more than you
            ever did at school and who knows maybe we’ll keep you!
          </p>
          <button className="btn primary">See Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
