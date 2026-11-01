
const mainTitle = document.getElementById('main-title'); //タイトル
const addTitle = document.getElementById('add-title'); //追加
const textarea = document.getElementById('text-area'); //テキストエリア
const textareaBox = document.getElementById('text-area-box'); //見えないテキスト
const addText = document.getElementById('add-text'); //見えるテキスト
const titelarea = document.getElementById('title-area');
const additionTitle = document.getElementById('addtitle2');

addTitle.addEventListener('click', () => {
  const textTitle = mainTitle.value;
  const textArea = textarea.value;

  console.log('タイトル', textTitle);
  console.log('詳細', textArea);

  if ((textTitle.trim() !== '', textArea.trim() !== '')) {
    const list = document.createElement('li');
    // list.className = 'listadd';
    titelarea.appendChild(list);
    const btn = document.createElement('button');
    btn.className = 'addbtn';
    list.appendChild(btn);
    btn.textContent = textTitle;
    const hiddenarea = document.createElement('input');
    list.appendChild(hiddenarea);
    // hiddenarea.className = 'Hiddenarea';
    hiddenarea.value = textArea;
    btn.addEventListener('click', () => {
      additionTitle.textContent = btn.textContent;
      addText.textContent = hiddenarea.value;
    });
  }
});
