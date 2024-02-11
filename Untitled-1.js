// تحديد عنصر الإدخال الذي يحتوي على المهام
const taskInput = document.getElementById('taskInput');

// تحديد القائمة التي سيتم عرض المهام فيها
const taskList = document.getElementById('taskList');

// دالة لإضافة مهمة جديدة إلى القائمة
function addTask() {
    // استخراج النص المدخل في حقل الإدخال وإزالة الفراغات الزائدة
    const taskText = taskInput.value.trim();

    // التأكد من أن النص المدخل غير فارغ
    if (taskText !== '') {
        // إنشاء عنصر li جديد لعرض المهمة
        let listItem = document.createElement('li');

        // تعيين النص وزر الحذف لعنصر li المنشأ
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">حذف</button>
        `;

        // إضافة العنصر li إلى القائمة
        taskList.appendChild(listItem);

        // إعادة تعيين حقل الإدخال بقيمة فارغة لإعداده لإضافة مهمة جديدة
        taskInput.value = '';
    }
}

// دالة لحذف المهمة عند النقر على زر الحذف
function deleteTask(button) {
    // تحديد عنصر li الذي يحتوي على الزر الذي تم النقر عليه
    const listItem = button.parentElement;

    // إزالة العنصر li من القائمة
    taskList.removeChild(listItem);
}

