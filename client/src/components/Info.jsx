import React from "react";
import "./info.css";
import About from "../Assets/about.jpg";


function Info() {
    return (
        <div classNameName="info">
            <div id="container">
                <div id="pageheader">
                    <h1>Disease Information</h1>
                </div>

                <div class="section">
                    <div class="pageitem">
                        <div id="slider">
                            <figure>
                                <img src={About} alt />
                            </figure>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="pageitem">
                        <div class="col">
                            <h2>Aenean at Ipsum</h2>
                            <p>Phasellus ac leo eget felis egestas vestibulum nec at velit. Vivamus venenatis, <a href="#">nibh
                                ut tempus viverra</a>, tellus augue pulvinar sapien, at iaculis justo nisi non metus.
                                Quisque quis malesuada arcu, sed ultricies nibh. Duis vehicula metus quis arcu rutrum faucibus
                                eget ut ex. Curabitur lacus justo, iaculis congue suscipit quis, posuere at turpis. Class aptent
                                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in quam non
                                urna volutpat consequat. Proin mollis ut mauris et venenatis. Vivamus dui nibh, blandit vitae
                                pellentesque sed, finibus sit amet nulla.</p>
                        </div>
                        <div class="col">
                            <h2>Etiam Eleifend Imperdiet Elit</h2>
                            <p>Nunc rhoncus convallis ex, eget viverra ex pulvinar non. Suspendisse enim ligula, varius sed
                                rutrum id, bibendum vitae lectus. Mauris mollis pellentesque diam et congue. Praesent dignissim
                                semper facilisis. Duis gravida, elit nec iaculis efficitur, sem orci commodo lectus, id cursus
                                sem diam in eros. Maecenas porta mi sed diam condimentum gravida. Nam a ligula consectetur,
                                imperdiet lacus nec, rutrum dui. Sed aliquam at magna non mollis. Duis fermentum purus eget nisi
                                dictum, vitae bibendum nulla cursus.</p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="pageitem">
                        <h2>Nec Pretium Condimentum</h2>
                        <p>Morbi bibendum faucibus placerat. Morbi vulputate, erat nunc tincidunt leo, scelerisque ullamcorper
                            dui dolor porttitor neque. Donec ut faucibus erat, vel efficitur enim. Fusce sit amet ligula eu
                            libero lacinia condimentum sed in turpis.</p>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus
                            pulvinar metus vel neque sagittis, at pharetra tellus tincidunt. Sed semper euismod ipsum, feugiat
                            consequat nisi eleifend et. Duis volutpat gravida efficitur. Nulla iaculis blandit semper. Maecenas
                            eget aliquet libero. Donec sit amet sagittis erat. Sed elementum felis id interdum cursus. Phasellus
                            ac urna feugiat, placerat massa et, vestibulum odio. Aenean eu nisl lobortis, tincidunt ligula
                            rhoncus, convallis mi.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="pageitem">
                        <div class="col">
                            <h2>Phasellus Ac Leo Eget</h2>
                            <p> Vivamus venenatis, nibh ut tempus viverra, tellus augue pulvinar sapien, at iaculis justo nisi
                                non metus. Quisque quis malesuada arcu, sed ultricies nibh. Duis vehicula metus quis arcu rutrum
                                faucibus eget ut ex. Curabitur lacus justo, iaculis congue suscipit quis, posuere at turpis.
                            </p>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
                                in quam non urna volutpat consequat. Proin mollis ut mauris et venenatis. Vivamus dui nibh,
                                blandit vitae pellentesque sed, finibus sit amet nulla.</p>
                        </div>
                        <div class="col">
                            <h2>Etiam Imperdiet Elit</h2>
                            <p>Nunc rhoncus convallis ex, eget viverra ex pulvinar non. Suspendisse enim ligula, varius sed
                                rutrum id, bibendum vitae lectus. Mauris mollis pellentesque diam et congue. Praesent dignissim
                                semper facilisis. Duis gravida, elit nec iaculis efficitur, sem orci commodo lectus, id cursus
                                sem diam in eros. </p>
                            <p>Maecenas porta mi sed diam condimentum gravida. Nam a ligula consectetur, imperdiet lacus nec,
                                rutrum dui. Sed aliquam at magna non mollis. Duis fermentum purus eget nisi dictum, vitae
                                bibendum nulla cursus.</p>
                        </div>
                        <div class="col">
                            <h2>Morbi Bibendum</h2>
                            <p>Donec ut faucibus erat, vel efficitur enim. Fusce sit amet ligula eu libero lacinia condimentum
                                sed in turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; Vivamus pulvinar metus vel neque sagittis, at pharetra tellus tincidunt. Sed semper
                                euismod ipsum, feugiat consequat nisi eleifend et. Duis volutpat gravida efficitur. Nulla
                                iaculis blandit semper. Maecenas eget aliquet libero. Donec sit amet sagittis erat. Sed
                                elementum felis id interdum cursus. Phasellus ac urna feugiat, placerat massa et, vestibulum
                                odio. Aenean eu nisl lobortis, tincidunt ligula rhoncus, convallis mi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;