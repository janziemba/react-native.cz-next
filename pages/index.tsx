import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { MutableRefObject } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from '../styles/Home.module.css';

const categories = [
    {
        folder: 'reservio-marketplace',
        numberOfImages: 10,
        title: '<b>Reservio Marketplace</b> - my previous full-time job',
    },
    {
        folder: 'reservio-business',
        numberOfImages: 6,
        title: '<b>Reservio Business</b> - my previous full-time job',
    },
    {
        folder: 'venkovka',
        numberOfImages: 7,
        title: '<b>Venkovka</b> – outdoor escape game I worked on in my free time',
    },
    {
        folder: 'conversation-topics',
        numberOfImages: 2,
        title: '<b>Conversation topics</b> - a simple app I work on in my free time',
    },
    {
        folder: 'fakescape-cyber-game',
        numberOfImages: 3,
        title: '<b>Fakescape Cyber game</b> – a simulation of a social site, it will be used for education about cybersecurity',
    },
];

const Home: NextPage = () => (
    <>
        <Gallery
            options={{
                bgOpacity: 0.8,
            }}
        >
            <Head>
                <title>Jan Ziemba - React Native developer</title>
                <meta content="Jan Ziemba - React Native developer" name="description" />
                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />
                <meta content="https://react-native.cz/preview.png" property="og:image" />
                <link rel="icon" href="/favicon.png"></link>
                <script defer data-domain="react-native.cz" src="https://plausible.io/js/plausible.js"></script>
            </Head>
            <div className="h-100">
                <div className="container-fluid h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-3 p-3 mb-5 mb-md-0 text-center">
                            <Image
                                alt="Me"
                                className="img-fluid d-block mx-auto"
                                height="298"
                                src="/me.png"
                                width="250"
                            />
                            <h1 className="mt-3">Jan Ziemba</h1>
                            <h5>React Native developer</h5>
                            <h6>Brno, Czechia</h6>
                            <a href="mailto:ziemba.jan@icloud.com">ziemba.jan@icloud.com</a>
                            <div className="mt-3">
                                <a
                                    className="d-inline-block mx-3"
                                    href="https://github.com/janziemba"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Image alt="Github" height="40" src="/github.png" width="40" />
                                </a>
                                <a
                                    className="d-inline-block"
                                    href="https://www.linkedin.com/in/janziemba/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Image
                                        alt="LinkedIn"
                                        height="40"
                                        src="/linkedin.png"
                                        width="40"
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className={`col-md-9 h-100 p-3 pb-md-0 mb-5 mb-md-0 ${styles.portfolio}`}
                        >
                            <div className="row align-items-center mb-3">
                                {categories.map((category) =>
                                    Array.from({ length: category.numberOfImages }, (_, i) => {
                                        const imageNumber = (i + 1).toString().padStart(2, '0');
                                        const path = `/apps/${category.folder}/${imageNumber}`;

                                        return (
                                            <div className="col-6 col-md-2 mb-2">
                                                <Item
                                                    height="1780"
                                                    original={`${path}.png`}
                                                    thumbnail={`${path}_thumb.png`}
                                                    title={category.title}
                                                    width="884"
                                                >
                                                    {({ open, ref }) => (
                                                        <img
                                                            ref={
                                                                ref as MutableRefObject<HTMLImageElement>
                                                            }
                                                            className="img-fluid rounded d-block mx-auto p-1"
                                                            height="319"
                                                            onClick={open}
                                                            src={`${path}_thumb.png`}
                                                            width="162"
                                                        />
                                                    )}
                                                </Item>
                                            </div>
                                        );
                                    }),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Gallery>
    </>
);

export default Home;
