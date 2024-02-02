import Head from 'next/head';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';
import Columns from '../../components/Columns';

export default function About() {
	return (
		<>
			<Head>
				<title>kevenandsoki (about)</title>
				<meta property="og:title" content="kevenandsoki (about)" />
				<meta property="og:description" content="some info about me, and my musical background." />
			</Head>

			<Columns>
				<TextBox big>
					<p>
						as i said before, i'm keven. hi! i'm an 18 year old college student, graduating in 2027.
					</p>
					<p>
						i grew up with and always loved video games, especially their music. most of my childhood was spent either playing games, or trying to make my own. i never managed to complete one, but i always loved creating soundtracks them.
					</p>
					<p>
						vgm composers like{' '}
						<a href="https://en.wikipedia.org/wiki/Daisuke_Amaya">Daisuke "Pixel" Amaya</a>{' '}
						<i>(<a href="https://www.cavestory.org/">Cave Story</a>)</i>{' '}
						and{' '}
						<a href="https://en.wikipedia.org/wiki/Toby_Fox">Toby Fox</a>{' '}
						<i>(<a href="https://www.undertale.com/">UNDERTALE</a>)</i> inspired me to never give up doing what i love. despite not having the most professional or industry-standard tools, they put out some of the most emotional, beautiful music i've heard; saying more in a few measures than some songs say in hundreds.
					</p>
					<p>
						amazing musicians like them are the ones who taught me that tools don't make the composer.
					</p>
				</TextBox>
				<TextBox big>
					<p>
						since then, i've pursued a formal training in both classical and jazz theory; and have aimed to perfect my craft.
					</p>
					<p>
						i use FL Studio 21 as my main DAW, although i'll occassionally use LSDJ or Famitracker to utilize a specific soundchip's unique sound. i'm also familiar with Logic and Ableton.
					</p>
					<p>
						on top of a vast library of digital instruments, i try to use my collection of real instruments whenever i can. these include an electric bass, electric guitar, acoustic guitar, flute, melodica, and some percussive instuments.
					</p>
				</TextBox>
			</Columns>
			<img
				className={styles.kasSittingImage}
				src="/assets/kas_sitting.png"
			/>
		</>
	);
}
