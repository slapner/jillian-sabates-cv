import Head from 'next/head';

const WORK_HISTORY = [
	{
		date: '2008-Current',
		title: 'Certified Anesthesiologist Assistant',
		location:
			'Envision Physician Services, Memorial Hospital West, Pembroke Pines, FL',
	},
	{
		date: '2010-Current',
		title: 'Student Coordinator',
		location: 'Nova Southeastern',
	},
	{ date: '2005-Current', title: 'Chief', location: 'Allied Health' },
	{ date: '2003-2005', title: 'Vice-Chief', location: 'Allied Health' },
];

const EDUCATION = [
	{
		date: '2006-2008',
		title: 'Master of Science: Anesthesia',
		location: 'Nova Southeastern University - Ft Lauderdale',
	},
	{
		date: '2001-2005',
		title: 'Bachelor of Science: Health Science',
		location: 'University of Florida - Gainesville',
	},
];

const CERTIFICATIONS = [
	{
		date: '2021 August',
		title: 'ACLS',
		desc: 'Advanced Cardiac Life Support',
	},
	{
		date: '2021 August',
		title: 'PALS',
		desc: 'Pediatric Advanced Life Support',
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
			<Head>
				<title>Jillian Sabates - Certified Anesthesiologist Assistant</title>
			</Head>
			<div className="relative py-3 max-w-4xl sm:max-w-xl sm:mx-auto">
				<div className="bg-white rounded-lg p-10">
					<div className="max-w-md mx-auto">
						<div className="space-y-2">
							<h1 className="text-4xl font-bold text-gray-700">
								Jillian Sabates
							</h1>
							<h2 className="text-gray-600 font-light">
								Certified Anesthesiologist Assistant
							</h2>
							<h3 className="text-base font-semibold tracking-tight text-gray-600 space-x-4">
								<span>(941) 400-7522</span>
								<span>jclapner@gmail.com</span>
							</h3>
						</div>
						<div className="divide-y divide-gray-200">
							<div className="py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-base">
								<p>
									I am an experienced and confident Anesthesiologist Assistant,
									currently serving as the Chief and Department Leader of The
									Allied Health Department
								</p>
							</div>
							<div className="py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-base">
								<h2 className="font-bold text-xl">Work History</h2>
								{WORK_HISTORY.map((item) => (
									<div className="flex w-full" key={item.date}>
										<div className="font-bold w-2/5 text-sm">{item.date}</div>
										<div className="flex flex-col flex-1">
											<div className="font-bold text-sm">{item.title}</div>
											<div className="text-sm italic">{item.location}</div>
										</div>
									</div>
								))}
							</div>
							<div className="py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-base">
								<h2 className="font-bold text-xl">Education</h2>
								{EDUCATION.map((item) => (
									<div className="flex w-full" key={item.date}>
										<div className="font-bold w-2/5 text-sm">{item.date}</div>
										<div className="flex flex-col flex-1">
											<div className="font-bold text-sm">{item.title}</div>
											<div className="text-sm italic">{item.location}</div>
										</div>
									</div>
								))}
							</div>
							<div className="py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-base">
								<h2 className="font-bold text-xl">Certifications</h2>
								{CERTIFICATIONS.map((item) => (
									<div className="flex w-full" key={item.date}>
										<div className="font-bold w-2/5 text-sm">{item.date}</div>
										<div className="flex flex-col flex-1">
											<div className="font-bold text-sm">{item.title}</div>
											<div className="text-sm italic">{item.desc}</div>
										</div>
									</div>
								))}
							</div>
							<div className="py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-base">
								<h2 className="font-bold text-xl">Affiliations</h2>
								<div className="space-y-2">
									<div>Florida Society of Anesthesiologists</div>
									<div>Florida Academy of Anesthesiologist</div>
									<div>Assistants American Society of Anesthesiologists</div>
									<div>American Academy of Anesthesiologist Assistants</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
