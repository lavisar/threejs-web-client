import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from '../config/motion';
import CustomButton from '../components/CustomButton';

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section className="home" {...slideAnimation('left')}>
					<motion.header {...slideAnimation('down')}>
						<img
							src="./threejs.png"
							alt="logo"
							className="w-8 h-8 object-contain"
						/>
					</motion.header>
					<motion.div
						className="home-content"
						{...headContainerAnimation}
					>
						<motion.dev {...headTextAnimation}>
							<h1 className="head-text text-animation">
								LET'S <br className="xl:block hidden" /> DO IT.{' '}
							</h1>
						</motion.dev>
						<motion.div
							{...headContentAnimation}
							className="flex flex-col gap-5"
						>
							<p className="max-w-md font-normal text-gray-800 text-base">
								Create your unique and exclusive shirt with our
								brand-new 3D customization tool.{' '}
								<strong>Unleash your imagination</strong> and
								define your own style
							</p>
							<CustomButton
								type="filled"
								title="Customize it"
								handleClick={() => (state.intro = false)}
								className="w-fit px-4 py-2.5 font-bold text-sm"
							/>
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
