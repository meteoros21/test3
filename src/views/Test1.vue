<template>
    <div id="test1">
        <h3>콤포넌트의 데이터를 테스트한다.<br>데이터의 변경이 실시간으로 rendering 되는 지 확인한다.</h3>
        <div class="form-inline" style="margin-top: 20px">
            <div class="input-group">
                <div class="form-group">
                    <input type="text" class="form-control" name="test" v-model="message">
                </div>
            </div>
        </div>
        <div style="margin-top: 20px">
            <span>입력한 데이터: {{ message }}</span>
        </div>

        <div class="form-inline" style="margin-top: 20px">
            <div class="input-group">
                <div class="form-group">
                    <input id="test-message2" type="text" class="form-control" name="test">
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-default form-control" v-on:click="updateMessage">테스트</button>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px">
            <span>입력한 데이터: {{ message2 }}</span>
        </div>
    </div>
</template>

<script>
    let data = {
        message: '',
        message2: ''
    }

    export default {
        name: "Test1",
        data: function () {
            return data;
        },
        methods: {
            updateMessage: function () {
                let text = document.getElementById('test-message2').value;
                alert(text);
                this.message2 = text
            }
        }
    }
</script>

<style scoped>

</style>