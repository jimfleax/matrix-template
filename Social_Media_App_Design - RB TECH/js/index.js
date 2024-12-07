function profilePrev() {

    $("#reetSideBar > nav > div > div > div > div > ul > div > cr-button").hover(function() {
        $("#profileContainer").html('<div style="-webkit-font-smoothing: antialiased;font-family: inherit;box-sizing: border-box;margin: 0px 35px 0px 0px;border: 0px;vertical-align: baseline;font-weight: bold;width: fit-content;background-color: rgb(255, 255, 255);color: rgb(0, 0, 0);padding: 2em;position: fixed;font-size: 25px;line-height: 110.8%;align-self: flex-start;top: 7%;left: 7.5%;filter: drop-shadow(rgb(204, 204, 204) 2px 1.7px 6px);border-radius: 3em;" class="profilePrev"> <div style="width: -webkit-fill-available;display: flex;margin: auto; display: none;"> <cr-button class="avatar " title="Go to Profile" aria-disabled="false" role="button" tabindex="0" style="margin: auto;border: solid 3px #5760d8e6;box-shadow: 0px 0px 7px 0px rgb(0 130 245 / 29%);width: 2.5em;height: 2.5em;margin-right: 0.7em;margin-left: 0;"></cr-button> <div style=" display: flex; flex-direction: column; width: fit-content; height: fit-content; margin: auto; margin-left: 0.3em; "> <span style=" width: fit-content; height: fit-content; /* margin: auto; */ font-size: 1.2em; font-weight: 400; ">Reetabrata Bhandari</span> <span style=" font-size: 17px; font-weight: 100; margin: 0; margin-top: 5px; height: fit-content; width: fit-content; ">An Awesome Web Developer.</span> <span style=" font-size: 15px; font-weight: 100; margin: 0; height: fit-content; width: fit-content; "> Suri, Birbhum, WB, India. |<b style=" font-weight: 400; "> Birthday</b> 6th October. </span> </div> </div> <div id="stats" style="display: flex;width: fit-content;height: fit-content;margin: auto;/* background: #fafafa; *//* box-shadow: 0px 0.3px 0.9px rgb(0 0 0 / 12%), 0px 1.6px 3.6px rgb(0 0 0 / 12%); */border-radius: 20px;/* margin-bottom: 2em; *//* padding: 10px; */margin-top: 0px;margin-left: 70px;text-align: center;/* border: solid 1px #e8e8e8; */padding: 5px;"> <div id="statsContent"> <span>Friends</span> <span>247</span> </div> <hr style=" height: 15px; width: 1px; border: none; background: #ccc; margin: auto; "> <div id="statsContent" style=" "> <span>Follower</span> <span>200k</span> </div> <hr style=" height: 15px; width: 1px; border: none; background: #ccc; margin: auto; "> <div id="statsContent"> <span>Following</span> <span>726</span> </div> </div></div>').fadeIn()
        $(".profilePrev").fadeToggle(400)
    }, function() {
        $(".profilePrev").fadeOut(300, function() {
            $(this).remove()
            hide();
        })
    })
}

function hide() {
    $("#profileContainer").hover(null, function() {
        $(".profilePrev").fadeOut(300, function() {
            $(this).remove()
        })
    })
}

$(function() {
    profilePrev();
})
