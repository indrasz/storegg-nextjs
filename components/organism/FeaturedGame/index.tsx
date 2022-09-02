import { useCallback, useState } from "react";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {

    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Our Featured
                    <br />
                    {' '}
                    Games This Year
                </h2>
                <div
                    className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up"
                >
                    <GameItem
                        key={1}
                        title={'Games'}
                        category={'Category'}
                        thumbnail={`/img/Thumbnail-1.png`}
                        id={'1'}
                    />
                    <GameItem
                        key={1}
                        title={'Games'}
                        category={'Category'}
                        thumbnail={`/img/Thumbnail-2.png`}
                        id={'1'}
                    />
                    <GameItem
                        key={1}
                        title={'Games'}
                        category={'Category'}
                        thumbnail={`/img/Thumbnail-3.png`}
                        id={'1'}
                    />

                    <GameItem
                        key={1}
                        title={'Games'}
                        category={'Category'}
                        thumbnail={`/img/Thumbnail-4.png`}
                        id={'1'}
                    />

                    <GameItem
                        key={1}
                        title={'Games'}
                        category={'Category'}
                        thumbnail={`/img/Thumbnail-5.png`}
                        id={'1'}
                    />
                </div>
            </div>
        </section>
    );
}