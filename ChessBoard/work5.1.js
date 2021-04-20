
function chessBoardGenerator() {

    let wrapper = document.querySelector(".wrapper");
    let outStr = `
    <div class="numbers-l">
            <div class="number-l8"><p class="nums-l">8</p></div>
            <div class="number-l7"><p class="nums-l">7</p></div>
            <div class="number-l6"><p class="nums-l">6</p></div>
            <div class="number-l5"><p class="nums-l">5</p></div>
            <div class="number-l4"><p class="nums-l">4</p></div>
            <div class="number-l3"><p class="nums-l">3</p></div>
            <div class="number-l2"><p class="nums-l">2</p></div>
            <div class="number-l1"><p class="nums-l">1</p></div>
        </div>
        <div class="nimbers-r">
            <div class="number-r8"><p class="nums-r">8</p></div>
            <div class="number-r7"><p class="nums-r">7</p></div>
            <div class="number-r6"><p class="nums-r">6</p></div>
            <div class="number-r5"><p class="nums-r">5</p></div>
            <div class="number-r4"><p class="nums-r">4</p></div>
            <div class="number-r3"><p class="nums-r">3</p></div>
            <div class="number-r2"><p class="nums-r">2</p></div>
            <div class="number-r1"><p class="nums-r">1</p></div>
        </div>
        <div class="letters-top">
            <div class="letters-ta"><p class="letters-t">a</p></div>
            <div class="letters-tb"><p class="letters-t">b</p></div>
            <div class="letters-tc"><p class="letters-t">c</p></div>
            <div class="letters-td"><p class="letters-t">d</p></div>
            <div class="letters-te"><p class="letters-t">e</p></div>
            <div class="letters-tf"><p class="letters-t">f</p></div>
            <div class="letters-tg"><p class="letters-t">g</p></div>
            <div class="letters-th"><p class="letters-t">h</p></div>
        </div>
        
        <div class="box">
            <div class="item glow-w" id="1">&#9820;</div>
            <div class="item glow-b" id="2">&#9822;</div>
            <div class="item glow-w" id="3">&#9821;</div>
            <div class="item glow-b" id="4">&#9819;</div>
            <div class="item glow-w" id="5">&#9818;</div>
            <div class="item glow-b" id="6">&#9821;</div>
            <div class="item glow-w" id="7">&#9822;</div>
            <div class="item glow-b" id="8">&#9820;</div>
            <div class="item glow-b" id="9">&#9823;</div>
            <div class="item glow-w" id="10">&#9823;</div>
            <div class="item glow-b" id="11">&#9823;</div>
            <div class="item glow-w" id="12">&#9823;</div>
            <div class="item glow-b" id="13">&#9823;</div>
            <div class="item glow-w" id="14">&#9823;</div>
            <div class="item glow-b" id="15">&#9823;</div>
            <div class="item glow-w" id="16">&#9823;</div>
            <div class="item glow-w" id="17"></div>
            <div class="item glow-b" id="18"></div>
            <div class="item glow-w" id="18"></div>
            <div class="item glow-b" id="20"></div>
            <div class="item glow-w" id="21"></div>
            <div class="item glow-b" id="22"></div>
            <div class="item glow-w" id="23"></div>
            <div class="item glow-b" id="24"></div>
            <div class="item glow-b" id="25"></div>
            <div class="item glow-w" id="26"></div>
            <div class="item glow-b" id="27"></div>
            <div class="item glow-w" id="28"></div>
            <div class="item glow-b" id="29"></div>
            <div class="item glow-w" id="30"></div>
            <div class="item glow-b" id="31"></div>
            <div class="item glow-w" id="32"></div>
            <div class="item glow-w" id="33"></div>
            <div class="item glow-b" id="34"></div>
            <div class="item glow-w" id="35"></div>
            <div class="item glow-b" id="36"></div>
            <div class="item glow-w" id="37"></div>
            <div class="item glow-b" id="38"></div>
            <div class="item glow-w" id="39"></div>
            <div class="item glow-b" id="40"></div>
            <div class="item glow-b" id="41"></div>
            <div class="item glow-w" id="42"></div>
            <div class="item glow-b" id="43"></div>
            <div class="item glow-w" id="44"></div>
            <div class="item glow-b" id="45"></div>
            <div class="item glow-w" id="46"></div>
            <div class="item glow-b" id="47"></div>
            <div class="item glow-w" id="47"></div>
            <div class="item glow-w" id="47">&#9817;</div>
            <div class="item glow-b" id="47">&#9817;</div>
            <div class="item glow-w" id="51">&#9817;</div>
            <div class="item glow-b" id="52">&#9817;</div>
            <div class="item glow-w" id="53">&#9817;</div>
            <div class="item glow-b" id="54">&#9817;</div>
            <div class="item glow-w" id="55">&#9817;</div>
            <div class="item glow-b" id="56">&#9817;</div>
            <div class="item glow-b" id="57">&#9814;</div>
            <div class="item glow-w" id="58">&#9816;</div>
            <div class="item glow-b" id="59">&#9815;</div>
            <div class="item glow-w" id="60">&#9813;</div>
            <div class="item glow-b" id="61">&#9812;</div>
            <div class="item glow-w" id="62">&#9815;</div>
            <div class="item glow-b" id="63">&#9816;</div>
            <div class="item glow-w" id="64">&#9814;</div>
        </div>
        <div class="lettres-bottom">
            <div class="letters-ba"><p class="letters-b">a</p></div>
            <div class="letters-bb"><p class="letters-b">b</p></div>
            <div class="letters-bc"><p class="letters-b">c</p></div>
            <div class="letters-bd"><p class="letters-b">d</p></div>
            <div class="letters-be"><p class="letters-b">e</p></div>
            <div class="letters-bf"><p class="letters-b">f</p></div>
            <div class="letters-bg"><p class="letters-b">g</p></div>
            <div class="letters-bh"><p class="letters-b">h</p></div>
        </div>
      `
      wrapper.innerHTML = outStr;
}

chessBoardGenerator()