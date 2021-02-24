'strict'
const addBtn = document.getElementById('addBtn');

//テーブル要素取得
const doList = document.getElementById('doList');

//配列。後に追加される
const list = [];

//追加
const addTask = () => {
    const inputValue = document.getElementById('input').value;
    list.push(inputValue);
}

//ボタン生成
const makeWorkBtn = () => {//状態　作業中
    const tr = document.createElement('tr');
    const tdStatusWork = document.createElement('td');
    const workBtn = document.createElement('button');
    const workContent = document.createTextNode('作業中')
    workBtn.appendChild(workContent);
    workBtn.setAttribute('id', 'work');
    tdStatusWork.appendChild(workBtn);
    return tr.appendChild(tdStatusWork);
}

const makeDelBtn = () => {//状態　消去
    const tr = document.createElement('tr');
    const tdStatusDel = document.createElement('td');
    const deleteBtn = document.createElement('button');
    const deleteContent = document.createTextNode('消去');
    deleteBtn.setAttribute('id', 'delete');
    deleteBtn.appendChild(deleteContent);
    tdStatusDel.appendChild(deleteBtn);
    return tr.appendChild(tdStatusDel);
}

//ToDoリスト作成
const makeList = () => {
    addTask();
    list.forEach((task, index) => {
        const tr = document.createElement('tr');
        //<th>ID
        const tdId = document.createElement('td');
        tdId.textContent = index;//ID
        //<th>コメント
        const tdComment = document.createElement('td');
        tdComment.textContent = task;//コメント

        tr.appendChild(tdId);
        tr.appendChild(tdComment);
        tr.appendChild(makeWorkBtn());
        tr.appendChild(makeDelBtn());
        doList.appendChild(tr);
    });
}
//todo表示
const toDoShow = () => {
    doList.innerText = '';
    makeList();
    document.getElementById('input').value = ''; //入力後、前の入力内容を消す
}

//実行
addBtn.addEventListener('click', toDoShow);
