export default function Profile() {
    return (
        <div className="user text-center pb-50 pe-30">
            <img src={`/img/avatar-1.png`} alt="profile" width="90" height="90" className="img-fluid mb-20" style={{ borderRadius: '100%' }} />
            <h2 className="fw-bold text-xl color-palette-1 m-0">Name</h2>
            <p className="color-palette-2 m-0">indra@gmail.com</p>
        </div>
    );
}