<div id="example">
    <first-component></first-component>
</div>

<script>
    Vue.component('first-component', {
        template: '<div>This is a custom component.</div>'
    })

    new Vue({
        el: '#example'
    })
</script>