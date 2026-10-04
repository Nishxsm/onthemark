"use client";

import {
    Mail,
    Phone,
    MapPin,
    User,
    CalendarDays,
    Clock3,
    Building2,
    MessageSquare,
    Send,
    MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import "../../styles/contact/ContactFormSection.css";

export default function ContactFormSection() {
    return (
        <section className="contact-form-section">
            <div className="contact-form-inner">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <h2>
                        Let's <span>Connect</span>
                    </h2>

                    <p className="contact-info-description">
                        Whether you have a project in mind or just want to
                        chat about possibilities, we'd love to hear from you.
                    </p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <div className="contact-detail-icon">
                                <Mail />
                            </div>

                            <div>
                                <h3>Email</h3>
                                <a href="mailto:info@onthemark.in">
                                    info@onthemark.in
                                </a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-detail-icon">
                                <Phone />
                            </div>

                            <div>
                                <h3>Phone</h3>
                                <a href="tel:+918369877560">
                                    +91 83698 77560
                                </a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-detail-icon">
                                <MapPin />
                            </div>

                            <div>
                                <h3>Location</h3>
                                <p>Mumbai, Maharashtra</p>
                                <p>India</p>
                            </div>
                        </div>
                    </div>

                    <p className="contact-response">
                        We typically respond within 24 hours on business days.
                    </p>

                    <a
                        href="https://wa.me/918369877560"
                        className="contact-whatsapp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MessageCircle />
                        <span>Quick Chat on WhatsApp</span>
                    </a>
                </motion.div>

                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label htmlFor="name">
                                <User />
                                Full Name *
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="email">
                                <Mail />
                                Email Address *
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label htmlFor="phone">
                                <Phone />
                                Phone Number *
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="company">
                                <Building2 />
                                Company / Project Type
                            </label>

                            <input
                                id="company"
                                type="text"
                                placeholder="Company or project type"
                            />
                        </div>
                    </div>

                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label htmlFor="date">
                                <CalendarDays />
                                Select Date *
                            </label>

                            <input
                                id="date"
                                type="date"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="time">
                                <Clock3 />
                                Select Time *
                            </label>

                            <input
                                id="time"
                                type="time"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-field contact-field-full">
                        <label htmlFor="message">
                            <MessageSquare />
                            Message / Project Details
                        </label>

                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Tell us about your project or what you'd like to discuss..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="contact-submit"
                    >
                        <Send />
                        <span>Schedule Meeting</span>
                    </button>
                </motion.form>
            </div>
        </section>
    );
}