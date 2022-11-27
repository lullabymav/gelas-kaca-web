import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Profile(){
    return(
        <div>
            <div className="my-8 mx-12">
                <Navbar />

                <section className="flex py-4 my-8">
                    <Sidebar />
                    <div>
                        <section className="text-sm">
                            <p className="font-semibold">Profil Saya</p>
                            <p>Kelola Informasi Profil Anda untuk mengontrol, melindungi, dan mengamankan akun</p>
                        </section>
                        <section className="flex flex-row gap-12 my-12">
                            <section className="basis-1/2 flex flex-col text-sm text-right font-semibold self-center">
                                <p className="h-14">Username</p>
                                <p className="h-14">Nama</p>
                                <p className="h-14">Email</p>
                                <p className="h-14">Nomor Telepon</p>
                                <p className="h-14">Jenis Kelamin</p>
                                <p className="h-14">Tanggal Lahir</p>
                            </section>
                            <section className="flex flex-col text-sm font-semibold">
                                <p className="h-12 w-full">Andrew</p>
                                <p className="border-2 border-gray-200 p-1 px-3 w-80 mb-8">Andrew</p>
                                <section className="flex gap-3">
                                    <p className="h-14">andrew**********@gmail.com</p>
                                    <a href="#" className="font-normal underline hover:text-blue-600">Ubah</a>
                                </section>
                                <section className="flex gap-3">
                                    <p className="h-14">*********924</p>
                                    <a href="#" className="font-normal underline hover:text-blue-600">Ubah</a>
                                </section>
                                <section className="flex gap-5">
                                    <section className="flex gap-1 items-center mb-4">
                                        <input type="radio" id="laki-laki" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label for="laki-laki">Laki-laki</label>
                                    </section>
                                    <section className="flex gap-1 items-center mb-4">
                                        <input type="radio" id="perempuan" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label for="perempuan">Perempuan</label>
                                    </section>
                                </section>
                                <section className="mt-3 border-2 border-gray-200 p-1 px-3">
                                    <input type="date" />
                                </section>
                            </section>
                        </section>
                        <section className="flex gap-4 justify-center">
                            <section className="flex basis-1/3 justify-end">
                                <img src="" alt="" className="bg-gray-300 w-40 h-40 rounded-full" />
                            </section>
                            <section className="flex items-end">
                                <section className="font-semibold text-center">
                                    <button className="text-sm border-2 border-gray-200 p-1 px-3 mb-3">Pilih Gambar</button>
                                    <p className="text-xs">Ukuran gambar: maks 1 MB</p>
                                    <p className="text-xs">Format gambar: JPEG, .PNG</p>
                                </section>
                            </section>
                        </section>
                        <section className="flex justify-center">
                            <button type="submit" className="mt-16 btn-in shadow text-black font-semibold hover:btn-in hover:opacity-70 focus:outline-none py-1 px-6 w-52 rounded-xl text-lg">
                                Save
                            </button>
                        </section>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;