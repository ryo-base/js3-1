'strict'
const addBtn = document.getElementById('addBtn');

//テーブル要素取得
const doList = document.getElementById('doList');

//配列。後に追加される
const list = [];

//追加
const addTask = function () {
    const input = document.getElementById('input').value;
    list.push(input);

    list.forEach((t, i) => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');//<th>ID
        const tdComment = document.createElement('td');//<th>コメント
        const tdStatus = document.createElement('td');//<th>状態 作業中
        const tdStatus2 = document.createElement('td');//<th> 状態　消去

        //状態　作業中
        const workBtn = document.createElement('button');
        const workContent = document.createTextNode('作業中')
        workBtn.appendChild(workContent);
        workBtn.setAttribute('id', 'work');
        tdStatus.appendChild(workBtn);

        //状態　消去
        const deleteBtn = document.createElement('button');
        const deleteContent = document.createTextNode('消去');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.appendChild(deleteContent);
        tdStatus2.appendChild(deleteBtn);

        tdId.textContent = i;//ID
        tdComment.textContent = t;//コメント
        tr.appendChild(tdId);
        tr.appendChild(tdComment);
        tr.appendChild(tdStatus);
        tr.appendChild(tdStatus2);

        doList.appendChild(tr);
    });
}

addBtn.addEventListener('click', () => {
    doList.innerText = '';
    addTask();
});

