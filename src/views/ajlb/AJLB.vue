<template>
	<el-row >
		<el-form v-if="ok" ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
			<el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="form.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间" id="timepicker">
				<div :span="4" style="margin-bottom: 22px">
					<el-button type="primary" v-on:click="addTimePkForAJ">增加</el-button>
					<el-button type="primary" v-on:click="delTimePkForAJ">减去</el-button>
				</div>
				<!--<div :span="24">-->
				<!--<el-col :span="10">-->
				<!--<el-date-picker type="daterange" placeholder="选择日期" v-model="form.date1" format="yyyy年MM月dd日"  style="width: 100%;"></el-date-picker>-->
				<!--</el-col>-->
				<!--<el-col :span="4" style="text-align: center"> <i class="el-icon-arrow-right"></i><i class="el-icon-arrow-right"></i> </el-col>-->
				<!--<el-col :span="10">-->
				<!--<el-time-picker is-range v-model="value3" placeholder="选择时间范围" format="HH时"></el-time-picker>-->
				<!--</el-col>-->
				<!--</div>-->
				<template v-for="(item,index) in form.date" v-if="!item.hidden">
					<el-row :span="24" :index="index+''" style="margin-bottom: 20px">
						<el-col :span="10">
							<el-date-picker type="daterange" placeholder="选择日期" v-model="item.value1" format="yyyy年MM月dd日"
											style="width: 100%;"></el-date-picker>
						</el-col>
						<el-col :span="4" style="text-align: center"><i class="el-icon-arrow-right"></i><i
								class="el-icon-arrow-right"></i></el-col>
						<el-col :span="10">
							<el-time-picker is-range v-model="item.value2" placeholder="选择时间范围" format="HH时"></el-time-picker>
						</el-col>
					</el-row>
				</template>
			</el-form-item>

			<el-form-item label="即时配送">
				<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" v-on:click="doSearch">立即创建 </el-button>
				<el-button @click.native.prevent>取消</el-button>
			</el-form-item>
		</el-form>
		<AjRes :message="value3" @getDataFromEc="getChildData"></AjRes>
	</el-row>

</template>


<script>
	import AjRes from './AjRes'
    import echarts from 'echarts'

	export default {
        data() {
            return {
                ok: true,
                value3: 'shuidongling',
                value2: '',
                form: {
                    name: '',
                    region: '',
                    date: [{
                        value1: '',
                        value2: ''
                    }],
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            addTimePkForAJ() {
                console.log("1111");
                this.form.date.push({value1: '', value2: ''})
            },
            delTimePkForAJ() {
                this.form.date.pop();
            },
            doSearch() {
                this.ok = !this.ok;
            },
            getChildData(msg){
                console.log(msg)
			}
        },
        components: {
            AjRes
        },
        watch: {
            ok: function (p, q) {
                console.log(p + "      " + q)
            }
        },
        updated: function () {
            console.log("gggggggggggggggggggggg")
        },
		mounted(){
		}
    }

</script>