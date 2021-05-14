// 실습 #1 - `todo-footer` 전역 컴포넌트 등록
// <p>This is another global child component</p>를 template으로 갖는 컴포넌트를 등록해보세요.
Vue.component('todo-footer', { template: '<p>This is another global child component</p>' }); // 전역 컴포넌트 등록

var cmp = { template: '<p>This is another local child component</p>' }; // 지역 컴포넌트 내용
var app = new Vue({
  el: '#app',
  data() {
    return { msg: 'This is a parent component' };
  },

  // 실습 #2 - `todo-list` 지역 컴포넌트 등록
  // <p>This is another local child component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
  components: { 'todo-list': cmp }, // 지역 컴포넌트 등록
});
