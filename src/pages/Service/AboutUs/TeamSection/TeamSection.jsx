import React from "react";
import "./TeamSection.scss";

const TeamSection = () => {
    return (
        <div className="team-section">
            {/* Banner Section */}
            <div className="banner">
                <div className="team_title">team</div>
            </div>

            {/* Quality Section */}
            <div className="quality-section">
                <div className="text">
                    <h1>We Care Deeply About The Quality Of Our Work.</h1>
                    <p>
                        At The Heart Of Everything We Do Is An Unwavering Commitment To
                        Excellence. We Believe That Quality Isn't Just About Delivering
                        Results—It's About Going Above And Beyond To Ensure Every Project
                        Reflects The Highest Standards. From The Initial Strategy To The
                        Final Execution, We Take A Meticulous Approach To Every Detail,
                        Ensuring That Each Deliverable Is Crafted With Care, Precision, And
                        Creativity. This Dedication To Quality Guarantees That Our Clients
                        Receive Not Only Effective Solutions But Also Lasting Value That
                        Drives Their Success Forward.
                    </p>
                </div>
                <div className="image">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/a836/8a17/2156f9c11af437be07d2209cf24a34ed?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiLLdZ-FRfuZrI59nZSivAioCAO4Slf~1fEVzbMYZYB9mbK77yBdRoAJ1mmFPgD5YkkEdIIDMreMrMPhnL8eW-L7TEewtzzTHfvKkexa42KrbiR5E4t8XwMK8UgJ-37kPzNlRdXfy7bbzGFixUHzMshTeANpErZxOqDmn2kg0JXOHJmFLOVGuhT1DKhh96t1lz7PrM1mDfSPltLKDk44A2s70REDcn5XzYO~LPk7ioUQhUpr9USIM-C1YrZU9~dr9JcbHYfzZPMSc9IVF7-5Bj4lHUtL5D1IcFqLNSjqfz874-bcjylLFNDZxgsyR7f0U9dD8KZTl7K1hL3p3LzkuQ__"
                        alt="CEO"
                    />
                    <span>CEO, GROWTHTHEORIES</span>
                </div>
            </div>

            {/* Team Section */}
            <div className="team">
                <h2>Meet Our Team</h2>
                <p>
                    Our philosophy is simple – hire a team of diverse, passionate people
                    and foster a culture that empowers you to do your best work.
                </p>
                <div className="team-members">
                    {[
                        {
                            name: "Olivia Rhye",
                            role: "Founder & CEO",
                            image: "https://randomuser.me/api/portraits/women/1.jpg"
                        },
                        {
                            name: "Phoenix Baker",
                            role: "Engineering Manager",
                            image: "https://randomuser.me/api/portraits/men/2.jpg"
                        },
                        {
                            name: "Lana Steiner",
                            role: "Product Manager",
                            image: "https://randomuser.me/api/portraits/women/3.jpg"
                        },
                        {
                            name: "Demi Wilkinson",
                            role: "Frontend Developer",
                            image: "https://randomuser.me/api/portraits/men/4.jpg"
                        },
                        {
                            name: "Candice Wu",
                            role: "Backend Developer",
                            image: "https://randomuser.me/api/portraits/women/5.jpg"
                        },
                        {
                            name: "Natali Craig",
                            role: "Product Designer",
                            image: "https://randomuser.me/api/portraits/women/6.jpg"
                        },
                        {
                            name: "Drew Cano",
                            role: "UX Researcher",
                            image: "https://randomuser.me/api/portraits/men/7.jpg"
                        },
                        {
                            name: "Orlando Diggs",
                            role: "Customer Success",
                            image: "https://randomuser.me/api/portraits/men/8.jpg"
                        },
                    ].map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <h4>{member.role}</h4>
                        </div>
                    ))}
                </div>

            </div>

            {/* Blog Section */}
            <div className="blogs">
                <div className="team_title">Blog</div>

                <ul>
                    {[
                        {
                            title: "Unlocking Growth Potential: How Data...",
                            author: "Sarah Mitchell",
                            readTime: "5 Min Read",
                        },
                        {
                            title: "The Power Of TikTok Advertising: Why...",
                            author: "David Harper",
                            readTime: "5 Min Read",
                        },
                        {
                            title: "Growth Audits: Identifying Key Opportun...",
                            author: "Emily Larson",
                            readTime: "5 Min Read",
                        },
                    ].map((blog, index) => (
                        <li key={index} className="blog-item">
                            <div className="blog-title">{blog.title}</div>
                            <div className="blog-author">{blog.author}</div>
                            <div className="blog-read-time">{blog.readTime}</div>
                        </li>
                    ))}
                </ul>
                <button className="see-all-blogs">See All Blogs</button>
            </div>
        </div>
    );
};

export default TeamSection;
