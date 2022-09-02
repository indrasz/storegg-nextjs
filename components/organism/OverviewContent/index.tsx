import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category key={1} nominal={1} icon="ic-desktop">
                                {'name'}
                            </Category>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow
                                    key={1}
                                    image={`/img/Thumbnail-1.png`}
                                    title={'name'}
                                    categori={'category name'}
                                    item={`item`}
                                    price={8000}
                                    status={'pending'}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}