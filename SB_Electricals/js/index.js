console.clear();
                function qoute() {
                    var a = document.querySelector("#backdrop");
                    var b = document.querySelector("#qouteModal");
                    a.style.display = "block";
                    b.style.display = "flex";
                    ripple();
                }
                function closeBtn() {
                    var a = document.querySelector("#backdrop");
                    var b = document.querySelector("#qouteModal");
                    a.style.display = "none";
                    b.style.display = "none";
                }
                ;console.log("%c (c) 2021 RB TECH - Reetabrata Bhandari. All rights reserved.", "color: green; font-family: Segoe ui; font-style: italic; font-size: 20px");
                $(".mailBtn").on("click", function() {
                                ripple();
                });
                
                function ripple() {
                      $(".mailBtn").append('<span class="MuiTouchRipple-root"><span class="MuiTouchRipple-ripple MuiTouchRipple-rippleVisible" style="width: 185.686px;height: 203.686px;top: -86.843px;left: -36.843px;"><span class="MuiTouchRipple-child"></span></span></span>');
                }