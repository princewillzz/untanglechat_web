import React, { useState } from "react";
import "./privacy.css";
function PrivacyPolicy() {
	const [lastUpdated] = useState("2021-07-10");

	return (
		<>
			<div className="container">
				<main>
					<div className="heading">
						<p>
							Last Updated: <span>{lastUpdated}</span>
						</p>
						<p className="companyName">
							UntangledChat Privacy Policy
						</p>
					</div>

					<section className="legalInfo">
						<p className="topicHeading">UntangledChat Legal Info</p>
						<p>
							Our Privacy Policy ("Privacy Policy") helps explain
							our data practices, including the information we
							process to provide our Services.
						</p>
						<p>
							For example, our Privacy Policy talks about what
							information we collect and how this affects you. It
							also explains the steps we take to protect your
							privacy, like building our Services so delivered
							messages aren’t stored by us and giving you control
							over who you communicate with on our Services.
						</p>
					</section>

					<section className="InformationWeCollect">
						<p className="topicHeading">Information We Collect</p>
						<p>
							UntangledChat receives or collects some information
							to operate, and provide our Services, including when
							you install, access, or use our Services.
						</p>
						<p>
							We require certain information to deliver our
							Services and without this we will not be able to
							provide our Services to you. For example, you must
							provide your mobile phone number to create an
							account to use our Services.
						</p>

						{/* part 1 */}
						<h4
							style={{ textTransform: "uppercase", fontSize: 16 }}
						>
							Information You Provide
						</h4>
						<ul>
							<li>
								<p>
									<b style={{ fontFamily: "sans-serif" }}>
										Your Account Information.
									</b>
									You must provide your mobile phone number to
									create a UntangledChat account. If you don’t
									provide us with this information, you will
									not be able to create an account to use our
									Services. You can add other information to
									your account, such as a profile picture.
								</p>
							</li>
							<li>
								<p>
									<b style={{ fontFamily: "sans-serif" }}>
										Your Messages.
									</b>
									We do not retain your messages in the
									ordinary course of providing our Services to
									you. Instead, your messages are stored on
									your device and not typically stored on our
									servers. Once your messages are delivered,
									they are deleted from our servers. The
									following scenarios describe circumstances
									where we may store your messages in the
									course of delivering them:
									<ul
										style={{
											marginTop: "1rem",
											marginBottom: "1rem",
										}}
									>
										<li>
											<b
												style={{
													fontFamily: "sans-serif",
												}}
											>
												Undelivered Messages.
											</b>
											If a message cannot be delivered
											immediately (for example, if the
											recipient is offline), we keep it in
											encrypted form on our servers for up
											to 30 days as we try to deliver it.
											If a message is still undelivered
											after 30 days, we delete it.
										</li>
									</ul>
									We offer end-to-end encryption for our
									Services. End-to-end encryption means that
									your messages are encrypted to protect
									against us and third parties from reading
									them
								</p>
							</li>
						</ul>
						{/* part 2*/}
						<h4
							style={{ textTransform: "uppercase", fontSize: 16 }}
						>
							Automatically Collected Information
						</h4>
						<ul>
							<li>
								<p>
									<b style={{ fontFamily: "sans-serif" }}>
										Usage And Log Information.
									</b>
									We collect information about your activity
									on our Services, like service-related,
									diagnostic, and performance information.
									This includes information about your
									activity (including how you use our
									Services, your Services settings, how you
									interact with others using our Services
									(including when you interact with a
									business), and the time, frequency, and
									duration of your activities and
									interactions), log files, and diagnostic,
									crash, website, and performance logs and
									reports. This also includes information
									about when you registered to use our
									Services; the features you use like our
									messaging, profile photo, whether you are
									online, when you last used our Services
									(your "last seen"); and when you last
									updated your profile information.
								</p>
							</li>
						</ul>
					</section>

					<section className="ThirdPartyInformation">
						<p className="topicHeading">Third-Party Information</p>
						<ul>
							<li>
								<p>
									<b style={{ fontFamily: "sans-serif" }}>
										Information Others Provide About You.
									</b>
									We receive information about you from other
									users. For example, when other users you
									know use our Services, they may provide your
									phone number just as you may provide theirs.
									They may also send you messages. We require
									each of these users to have lawful rights to
									collect, use, and share your information
									before providing any information to us. You
									should keep in mind that in general any user
									can capture screenshots of your chats or
									messages or make recordings of your calls
									with them and send them to UntangledChat or
									anyone else, or post them on another
									platform.
								</p>
							</li>
						</ul>
					</section>

					<section className="UpdatesToOurPolicy">
						<p className="topicHeading">Updates To Our Policy</p>
						<p>
							We may amend or update our Privacy Policy. We will
							provide you notice of amendments to this Privacy
							Policy, as appropriate, and update the “Last
							modified” date at the top of this Privacy Policy.
							Please review our Privacy Policy from time to time.{" "}
						</p>
					</section>

					<section className="contactInfo">
						<p className="topicHeading">Contact Us</p>
						If you have questions or issues about our Privacy
						Policy,
						<br /> UntangleChat
						<br />
						Email:{" "}
						<a href="mailto:princewillz2013@gmail.com">
							princewillz2013@gmail.com
						</a>
					</section>
				</main>
			</div>
		</>
	);
}

export default PrivacyPolicy;
