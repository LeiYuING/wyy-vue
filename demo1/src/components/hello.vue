<template>
  <div>
    <h1>hello</h1>
    <p>
      {{msg}}
    </p>
    <p>
      {{num++}}
    </p>
    <p>
      {{bool?'哈哈':'嘿嘿'}}
    </p>

    <!--会将msg替代掉原本标签里的文本-->
    <p v-text="msg"></p>

    <!--会解析其中的html标签-->
    <p v-html="ht"></p>

    <!--通过控制元素的display显隐来控制标签中的值是否输出-->
    <p v-show="bool">heelo</p>

    <!--需要联合插值表达式,不参与更新-->
    <p v-once>{{msg}}</p>

    <!--保持在元素上直到关联实例结束编译-->
    <p v-cloak>{{msg}}</p>

    <!--原样输出-->
    <p v-pre>{{msg}}</p>

    <!--与v-show不同的是v-if是动态的删除或者添加dom元素-->
    <p v-if="false">你好</p>
    <p v-else>不好</p>

    <!--遍历数组-->
    <p v-for="array in arrays">
      {{array}}
    </p>

    <!--绑定事件-->
    <button  type="submit" id="btn" v-on:click="f('aaaaaa')">点我</button>
    <!--缩写-->
    <button @click="f('ssss')">点我</button>

    <!--动态绑定-->
    <a v-bind:href="bhref">vue官网</a>
    <!--表示此标签有三个class,v-bind可以与普通class联合使用-->
    <h1 class="tt" :class="['test','line']"></h1>
    <!--根据布尔值类型来判断类-->
    <h2 :class="{'line':bool,'nine':bool}"></h2>


    <!--v-model可以在表单和属性之间实现双线绑定-->
    <input v-model="msg"  placeholder="输入内容">
    <p>输入了:{{msg}}</p><br>

    <p>{{msg}}</p><br>
    <textarea v-model="msg" placeholder="这是个文本框"/><br>

    <!--复选框-->
    <input type="checkbox" id="checkbox" v-model="msg">
    <label for="checkbox">{{msg}}</label><br>

    <!--复选框-->
    <input type="checkbox" id="mk" value="mk" v-model="nnn">
    <label for="mk">mk</label>
    <input type="checkbox" id="ly" value="ly" v-model="nnn">
    <label for="ly">ly</label>
    <input type="checkbox" id="hh" value="hh" v-model="nnn">
    <label for="hh">hh</label>
    <br>
    <span>{{nnn}}</span><br>

    <!--选择按钮-->
    <input type="radio" id="o" value="o" v-model="ch" >
    <label for="o">o</label>
    <input type="radio" id="t" value="t" v-model="ch">
    <label for="t">t</label><br>
    <span>{{ch}}</span><br>


    <!--多选框-->
    <select v-model="ch">
      <option disabled value="">请选择</option>
      <option>a</option>
      <option>b</option>
      <option>c</option>
    </select><br>
    <span>{{ch}}</span>

    <!--多选框-->
    <select v-model="ch"  multiple>
      <option>e</option>
      <option>f</option>
      <option>g</option>
    </select><br>
    <span>{{ch}}</span><br>

    <!--多选框-->
    <select v-model="ch">
      <option v-for="option in options" v-bind:value="option.value">
        {{option.text}}
      </option>
    </select>
    <br>
    <span>{{ch}}</span><br>

    <input v-model="a" placeholder="第一个数">
    <input v-model="b" placeholder="第二个数">
    {{sum(a,b)}}
    <p id="kk"></p>
    <br>
    <!--组件通过v-bind绑定props中的值来实现参数传递-->
    {{hh}}
    </div>
</template>
<script>
export default {
  props: ['hh'],
  name: "hello",
  data(){
    return{
      ht: '<B>雷宇</B>',
      msg: 'hello,vue',
      num: 136,
      bool: true,
      arrays: ['h','e','l','l','o'],
      f,
      bhref: 'https://vuejs.bootcss.com',
      nnn: [],
      ch: '',
      options: [
        {text:'one',value:'a'},
        {text: 'two',value: 'b'},
        {text: 'three',value: 'c'}
      ],
      a: 0,
      b: 0,
      lm: 0,
      sum
    }
  }
}

function sum(a,b){
  return Number(a)+Number(b);
}
function f(data) {
  alert(data)
}


</script>
<style>
[v-cloak] {
  display: none;
}
</style>
