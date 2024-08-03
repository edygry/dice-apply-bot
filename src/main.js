function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function apply_page_logic(win) {
  // var doc = win.document
  // console.log(doc)
  await sleep(6000);
  var button_outer = win.document.querySelector("apply-button-wc");
  console.log(button_outer);
  win.document
    .querySelector("apply-button-wc")
    .shadowRoot.querySelector(".btn.btn-primary")
    .click();
  await sleep(4000);
  var steps_text = win.document.querySelector("progress-bar").label;
  var total_steps = Number(steps_text.split("of")[1].trim());
  for (let index = 0; index < total_steps; index++) {
    win.document.querySelector(".btn-next").click();
    await sleep(2000);
  }
  await sleep(3000);
}
async function job_apply(element) {
  var job_id = element.querySelector(".card-title-link.normal").id;
  var job_link = `https://www.dice.com/job-detail/${job_id}`;
  var win = window.open(job_link);
  // win.onload = async()=>
  await apply_page_logic(win);

  win.close();
}
async function job_loop() {
  var job_list = Array.from(
    document.querySelectorAll("div.card-header:not(.has-status)"),
  );
  for (let index = 0; index < job_list.length; index++) {
    const element = job_list[index];
    await job_apply(element);
  }
}
async function main() {
  console.log("run main");
  await job_loop();
  // var job_id = document.querySelector('div.card-header:not(.has-status)').querySelector('.card-title-link.normal').id
  // var job_link = `https://www.dice.com/job-detail/${job_id}`
  // var win = window.open(job_link)
  // // win.onload = async()=>
  // await apply_page_logic(win)

  // win.close()
}
// const showButtons = (this_el)=>this_el.hidden=!this_el.hidden
console.log("test run");
var s = document.createElement("div");
// s.innerHTML = `<button class="btn btn-block btn-primary btn-efc-primary px-4" onclick="showButtons(this)"><i class="fa fa-lg fa-fw fa-gear"></i></button>`;
s_b = document.createElement("button");
s_b.innerHTML = "Apply Bot";
s.onclick = main;
s_b.setAttribute("id", "my_main_content");
s_b.classList.add(
  // btn btn-block btn-primary btn-efc-primary px-4
  "btn",
  "btn-primary",
  "btn-efc-primary",
);
s.appendChild(s_b);
s.style =
  "top: 61px; right: 0px; position: fixed; z-index: 99999; padding: 10px;";
document.body.appendChild(s);
