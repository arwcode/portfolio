import { socialMedia } from '@/data'

const Footer = () => {
	return (
		<footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-3">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 ARWcode
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map((info) => (
						<div
							key={info.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={info.img} alt="icons" width={20} height={20} />
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
