import Input from "../../components/atoms/Input";
import SideBar from "../../components/organism/SideBar";

export default function Member() {
    return (
        <section className="edit-profile overflow-auto">
            <SideBar activeMenu="settings" />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                    <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                        <form action="">
                            <div className="photo d-flex">
                                <div className="image-upload">
                                    <label htmlFor="avatar">
                                        <img src={`/img/avatar-1.png`} alt="icon upload" width={90} height={90} style={{ borderRadius: '100%' }} />
                                    </label>
                                    <input
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                        accept="image/png, image/jpeg"
                                    />
                                </div>
                            </div>
                            <div className="pt-30">
                                <Input
                                    label="Full Name"
                                    value="Name"
                                />
                            </div>
                            <div className="pt-30">
                                <Input label="Email Address" disabled value="email@gmail.com" />
                            </div>
                            {/* <div className="pt-30">
                    <Input label="Phone" />
                  </div> */}
                            <div className="button-group d-flex flex-column pt-50">
                                <button
                                    type="button"
                                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                >
                                    Save My Profile
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </main>
        </section>
    );
}