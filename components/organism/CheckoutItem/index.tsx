export default function CheckoutItem() {
    return (
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
            <div className="pe-4">
                <div className="cropped">
                    <img src={`/img/Thumbnail-1.png`} className="img-fluid" alt="" />
                </div>
            </div>
            <div>
                <p className="fw-bold text-xl color-palette-1 mb-10">
                    Name
                </p>
                <p className="color-palette-2 m-0">
                    Category:
                    {' '}
                    teagory Name
                </p>
            </div>
        </div>
    );
}