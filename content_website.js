var sourceData = `<!DOCTYPE html>
<!-- saved from url=(0024)http://localhost:8080/#/ -->
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <meta name="baidu-site-verification" content="ueoFOiEbKx" />
        <title>技术标准补贴</title>
            <meta name="keywords" content="标准化,制定标准,参与标准,标准研制,实施标准化,标准化战略" />
            <meta name="description" content="适用范围
1.注册在中关村科技园区西城园政策区范围，经中关村科技园区西城园管委会认定，且于申报年度已申请纳入中关村西城园统计范围的中关村高新技术企业；
2.经认定的科技孵化机构；
3.西城区辖区内与西" />
    <link rel="shortcut icon" href="/Content/Images/cachewanglogo2.png" />
    <!--<link rel="stylesheet" type="text/css" href="static/css/reset1.css">
    <link rel="stylesheet" type="text/css" href="/Content/css/public/reset.css">-->

    <script src="/Content/Scripts/browser.js"></script>
    <script src="/Content/Scripts/polyfill.js"></script>
    <script src="/Content/Scripts/jquery-3.3.1.min.js"></script>
    <link href="/Content/fontawesome-free-5/web-fonts-with-css/css/all.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/Content/Scripts/layui/css/layui.css">
    <link href="/Content/bootstrap-4.0.0-dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="/Content/Scripts/layui/layui.all.js"></script>
    <link rel="stylesheet" type="text/css" href="/Content/css/public/homepage.css">
    <link rel="stylesheet" type="text/css" href="/Content/css/public/style.css">
    <script src="/Content/Scripts/popper.min.js"></script>
    <script src="/Content/Scripts/jquery-migrate-1.1.1.js"></script>
    <script src="/Content/layer/layer.min.js"></script>
    <script src="/Content/bootstrap-4.0.0-dist/js/bootstrap.min.js"></script>
    <script src="/Content/Scripts/js.cookie.js"></script>
    <link href="/Content/css/compare-modal.css" rel="stylesheet" />
    <link href="/Content/css/sweetalert2.css" rel="stylesheet" />
    <script src="/Content/Scripts/sweetalert2.min.js"></script>

    <script src="/Content/Scripts/personalCenter/common-ext.js"></script>
    <script src="/Content/cdn/babel-polyfill.min.js"></script>
    <style type="text/css">
        .tooltip-inner {
            max-width: 800px !important;
        }

        #Comparison-list-unstyled {
            font-family: ccwfont;
        }

        @font-face {
            font-family: 'ccwfont';
            src: url('/Content/Crawler/ccw.eot') format('embedded-opentype'), url('/Content/Crawler/ccw.ttf') format('truetype');
        }

        .watermark {
            background-image: url(/Content/Images/CommercializationDetail.png);
        }

        .bd_weixin_popup {
            height: 300px !important;
        }



        .uname {
            vertical-align: middle;
            display: inline-block;
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
       
    </style>
</head>
<body>
    <div class="body-wrapper">
        <div class="container-wrapper">
            <div class="fix-header">
                <div class="content">
                    <div class="logo">
                        <a href="http://www.chacewang.com"><img width="150px" height="46px" alt="查策网LOGO" src="/Content/Images/chacewang-log1.png" /></a>
                    </div>
                    <div class="tip">
                        <span class="text">科技产业政策大数据平台</span>
                    </div>
                    <div class="city area-danxuan" data-value="RegisterArea_HNDQ_Guangdong_SZ" data-name="深圳">
                        <span class="city-name">深圳</span>
                        <span class="triangle2"></span>
                        <input type="hidden" id="cityCode" />
                    </div>
                    <div class="menu">
                        <div id="fix-menu0" class="menu-item" data-code="0">
                            <a href="/">首页</a>
                        </div>
                        <div id="fix-menu1" class="menu-item" data-code="1">
                            <span class="text">产业政策</span>
                            <span class="triangle2"></span>
                        </div>
                        <div id="fix-menu3" class="menu-item" data-code="3">
                            <span class="text">政策匹配</span>
                            <span class="triangle2"></span>
                        </div>
                        <div id="fix-menu2" class="menu-item" data-code="2">
                            <span class="text">高企工具</span>
                            <span class="triangle2"></span>
                        </div>
                        <div id="fix-menu7" class="menu-item" data-code="7">
                            <span class="text">企业服务</span>
                            <span class="triangle2"></span>
                        </div>
                        <div id="fix-menu8" class="menu-item" data-code="8">
                            <a class="memberCenter" onclick="JupmLiveBroadcast()">精品课程</a>


                        </div>
                        <div id="fix-menu6" class="menu-item" data-code="6">
                            <a class="memberCenter" href="/mc/worktable">会员中心</a>
                        </div>
                    </div>
                    <div class="user-login">
                        <div class="register" onclick="GoUrl('/Login/Register?go=bbs')">免费注册</div>
                        <div class="login" onclick="LogionDialog()">登录</div>
                    </div>
                    <div class="navbar-user" data-code="user" style="display: none">
                        <div class="userinfo">
                            <div class="uimg">
                                <img src="/Content/Images/默认头像.jpg" />
                            </div>
                            <span class="uname"></span>
                            <span class="triangle2"></span>
                        </div>
                        <div class="operbar">
                            <div class="operbar-item" onclick="PersonInfoDialog()">基本资料</div>
                            <div class="operbar-item" onclick="ChangePasswordDialog()">修改密码</div>
                            <div class="operbar-item" onclick="LogionOut()">退出</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header" style="height: 0">
                <div class="header-content-wrapper">
                    <div class="sub-menu">
                        <ul id="list1" class="item-list">
                            <li onclick="GetCity1()">政策查询</li>
                            <li onclick="GoUrl('/news/PIndex_New?ChaPlate=1')">政策新闻</li>
                            <li onclick="GetCityDB()">政策对比</li>
                            <li onclick="GoUrl('/ProjectSearch/ChartIndex')">政策图谱</li>
                            <li onclick="GoUrl('/Support/Search')">资助名单</li>
                        </ul>
                        <ul id="list3" class="item-list">
                                    <li onclick="newOpenWindow('/Home/PcpgIndex')">极速匹配</li>

                            <li onclick="newOpenWindow('/mc/eval/exact')" class="text-red">精准匹配</li>
                            <li onclick="newOpenWindow('/mc/sub')">订阅管理</li>
                        </ul>
                        <ul id="list2" class="item-list">
                            <li onclick="GoUrlArea('/HighTech/New_HightTeach')">名单查询</li>
                                    <li onclick="newOpenWindow('/HighScore/Index');">评分诊断</li>

                            <li onclick="newOpenWindow('/mc/report')">智能助手</li>
                            <li onclick="newOpenWindow('/mc/bill')">研发辅助账</li>
                            
                        </ul>


                        <ul id="list7" class="item-list">
                            <li onclick="Specialty('Professionals')">专业服务</li>
                            <li onclick="Technology('ServiceCategory')">产业资源</li>
                            
                            <li onclick="OpenTaxCategory()">税率查询</li>
                            <li onclick="newOpenWindow('/mall/home')">服务商城</li>
                        </ul>



                    </div>
                </div>
            </div>
            <div class="main-wrapper ">
                        <div style="margin-top: 68px">
                            

<link href="/Content/css/projectDetail.css" rel="stylesheet" />
<link href="/Content/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet" />
<link href="/Content/css/comment.css" rel="stylesheet" />

<link href="/Content/css/newsDetail.css" rel="stylesheet" />
<link rel="stylesheet" href="/Content/jQuery-emoji/lib/css/jquery.mCustomScrollbar.min.css" />
<link rel="stylesheet" href="/Content/jQuery-emoji/dist/css/jquery.emoji.css" />
<link rel="stylesheet" href="/Content/jQuery-emoji/lib/css/railscasts.css" />
<link rel="stylesheet" href="/Content/jQuery-emoji/dist/css/index.css" />
<style type="text/css">
    /*    .main-wrapper {*/
    /*        background-image: url(/Content/Images/CommercializationDetail.png);*/
    /*    }*/
    .Body-wrap {
        background-image: url(/Content/Images/CommercializationDetail.png);
    }

    @font-face {
        font-family: 'ccwfont';
        src: url('/Content/Crawler/ccw.ttf');
    }

    .ccw-font-style {
        font-family: ccwfont;
    }

    .main-titles {
        text-align: center;
        margin-bottom: 8px;
    }

    .content-empty {
        margin: 200px auto;
        width: 258px;
        height: 262px;
    }

    #hot-pro .hot-pro p, #hot-pro .one p {
        /*width: 200px;*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
    }

    a {
        word-break: break-all;
    }

    /*上一篇、下一篇 新闻*/
    .relationNews {
        color: red;
        font-size: 16px;
        display: flex;
        margin-top: 20px;
        margin-bottom: 10px;
    }

        .relationNews span {
            display: inline-block;
            width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 20px;
        }

            .relationNews span a {
                color: red;
                text-decoration: none;
            }

    .newsUl {
        display: block !important;
    }

        .newsUl li p {
            margin-bottom: 0
        }
        .pred {
            color: red;
        }
</style>
<input type="hidden" id="cityCode" />
<input type="hidden" id="hidmainId" value="5b6aab6e-83b5-46c6-8d96-982953963946" />
<input type="hidden" id="hidPename" value="圳据知全自再" />

<div class="Body-wrap">
    <div class="container min-width-1170">
        <div class="row">
            <div class="col-9">
                <div class="left-cont">
                    <div class="detail-title">
                        <p class="ccw-font-style">圳据知全自再</p>
                        <div class="title-info" id="titleInfo">
                            <span class="detail-type">
                                <i class="fa fa-building" aria-hidden="true"></i>
                                部门：
                                <span class="ccw-font-style">市镇施目列联秀园</span>
                            </span>
                            <span class="detail-time">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
2020-08-05&nbsp;-&nbsp;2020-08-16
                            </span>

                            <button id="Subscribe" attr-IsSubscribe="true" onclick="checkLogo(Subscribe, '5b6aab6e-83b5-46c6-8d96-982953963946')"><i class="fa fa-plus" aria-hidden="true"></i>订阅</button>
                        </div>
                    </div>
                    <div class="detail-content project-detail">
                        <div class="industry-category">
                            <p class="common-title">产业类别</p>
                            <ul class="list-unstyleds ccw-font-style">
<li>总圳据机属</li><li>张圳间介</li><li>农第</li><li>码融第</li><li>交民>份流>供应链</li><li>张导奖也</li><li>生态修申</li><li>节水云金</li><li>总端装步</li><li>二器罪</li><li>生命健康</li><li>生份医药</li><li>医疗器械</li><li>经水类汽车</li><li>政洋委第</li><li>航空航高</li><li>名阳评</li><li>犯发集升</li><li>军设第</li><li>经水类究节水</li><li>违化标意扶国</li><li>犯发主属</li><li>经材料</li><li>9?>移动民集</li><li>份阳评</li><li>新块链</li><li>罪设智水</li><li>乙筑第</li><li>软快</li><li>产成犯南</li><li>甲国请</li><li>员路包</li>                            </ul>
                        </div>
                            <div class="">
                                <p class="common-title">申报条件</p>
                                        <p class="ccw-font-style">适用立励</p>
                                        <p class="ccw-font-style">2.栋火在间关村张圳施新市镇施处革新立励人间关村张圳施新市镇施目联园认定且于者股并电四者合纳入间关村市镇施统国立励图间关村总经圳据册第</p>
                                        <p class="ccw-font-style">1.人认定图张圳孵化二构</p>
                                        <p class="ccw-font-style">6.市镇新务新内究市镇施目联园签乡为作协议图码融二构</p>

                            </div>
                                                    <div>
                                <p class="common-title">支持力度</p>
                                        <p class="ccw-font-style">鼓改册第质元和参究须定圳据知全：</p>
                                        <p class="ccw-font-style">（丁）质元和参究须定山础圳据、委品、设艺、圳据机属图算际知全、算费知全、丙第知全图册第（予物起草奖也前个任），在知全大布后分证日号丁次性90进规、10进规、20进规自再；</p>
                                        <p class="ccw-font-style">（点）承担各展算际知全化圳据联秀园秘东活、分圳据联秀园秘东活、设作组秘东活设作图册第天委第阳盟，分证日号丁次性60进规、10进规、20进规自再；对承担算费知全化圳据联秀园秘东活、分圳据联秀园秘东活设作图册第天委第阳盟，分证日号丁次性29进规、5进规自再。</p>
                                        <p class="ccw-font-style">同丁并电，册第择种享变以上之丁自再配码；同丁册第并电自再贴收项超时100进规。</p>

                            </div>
                                                    <div>
                                <p class="common-title">申报材料</p>
                                        <p class="ccw-font-style">者股指亿待获布</p>

                            </div>
                                                    <div>
                                <p class="common-title">项目来源</p>
                                                    <p>关于开展2019年度西城园产业政策网上系统基本信息申报的通知</p>
                                                    <p class="pred">备注：如无法链接到原站点相关文章，请参看下面相关新闻栏目</p>
                                                <p>
                                                    <a href="/NewHome/JumpLink?url=https://www.bjxch.gov.cn/xxgk/xxxq/pnidpv865674.html" rel="nofollow" target="_blank">https://www.bjxch.gov.cn/xxgk/xxxq/pnidpv865674.html</a>
                                                </p>

                            </div>
                                                        <div>
                                    <p class="common-title">相关新闻</p>
                                    <ul class="newsUl">
                                                <li title="【西城】关于开展2019年度西城园产业政策网上系统基本信息申报的通知">
                                                    <a href="/news/NewsDetail/69394?from=home" target="_Blank">
                                                        <p>【西城】关于开展2019年度西城园产业政策网上系统基本信息申报的通知</p>
                                                    </a>
                                                </li>
                                                <li title="【西城】关于公示2018年度西城园产业政策支持单位名单的通知">
                                                    <a href="/news/NewsDetail/52970?from=home" target="_Blank">
                                                        <p>【西城】关于公示2018年度西城园产业政策支持单位名单的通知</p>
                                                    </a>
                                                </li>

                                    </ul>
                                </div>

                                                    <div>
                                <p class="common-title">申报系统</p>
                                                <p>中关村西城园自主创新申报系统</p>
                                                <p>
                                                    <a href="/NewHome/JumpLink?url=http://61.49.3.154:81/zjsb" rel="nofollow" target="_blank">http://61.49.3.154:81/zjsb</a>
                                                </p>
                                                <p>注：基本信息审核通过后，另行发布通知在线提交政策条款材料。政策条款模块申报时间：2020年9月（拟定，另行通知）。</p>

                            </div>
                    </div>
                </div>
                <div style="border-top: 1px solid #ccc; padding-top: 35px;">
                    <div class="like">
                        <div class="btn-like-group like-group">
                            <div class="btn-like" onclick="OOPCall(SendZan, this, 'Compose')/*SendZan(this, 'Compose')*/">
                                <a>喜欢</a>
                            </div>

                            <div class="like-count">
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="media content-msg">
                    <img class="mr-3 head-portraits rounded-circle" id="headImg" src="/Content/Images/%e9%bb%98%e8%ae%a4%e5%a4%b4%e5%83%8f.jpg" alt="默认头像" />
                    <div class="media-body">
                        <div id="div-base" class="form-control textarea" contenteditable="true" placeholder="请写下您的提问或评论..."></div>
                        <div class="msg-bottom">
                            <div class="div-emoji btn btn-sm btn-default">
                                <i class="far fa-smile" id="div-base-emoji"></i>
                            </div>
                            <div class="div-send float-right">
                                <button type="button" class="btn btn-primary btn-bg pull-right" onclick="OOPCall(SendComment, this)/*SendComment(this)*/">提交</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment-header">
                    <span class="comment-count"><span>0</span>条评论</span>
                    <button id="btnOnlyAuthor" type="button" class="btn btn-light float-right" style="display: none">只看作者</button>
                </div>
                <div class="comment-body">

                </div>
            </div>
            <div class="col-3">
                <div class="right-cont">
                            <div class="pub">
                                <p class="pub-title">
                                    <span></span>需求留言
                                </p>
                                <p>
                                    公司名：<input id="Company" type="text" placeholder="请输入公司名称">
                                </p>
                                <p>
                                    联系人：<input id="Linkman" type="text" placeholder="请输入联系人名称">
                                </p>
                                <p>
                                    手机号：<input id="Phone" type="text" placeholder="请输入手机号码">
                                </p>
                                <div class="demand-chose" id="demand">
                                    <p>选择需求</p>
                                    <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="7">
                                                        <i>税务筹划服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="8">
                                                        <i>股权融资服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="9">
                                                        <i>贷款融资服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="1">
                                                        <i>高企认定服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="2">
                                                        <i>政府扶持资金</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="3">
                                                        <i>产学研合作</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="4">
                                                        <i>知识产权服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="5">
                                                        <i>财务审计服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="6">
                                                        <i>其他服务</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="10">
                                                        <i>服务商招募</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="11">
                                                        <i>辅助账系统</i>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="" value="12">
                                                        <i>总裁特训</i>
                                                    </label>
                                                </li>

                                    </ul>
                                </div>
                                <div class="need">
                                    <textarea maxlength="300" name="backstageRemark" id="Requirement" placeholder="请输入您的具体需求（不超过300字）"></textarea>
                                    <div class="btn-wrap">
                                        <input type="hidden" id="demandTest" />
                                        <button class="btn btn-primary btn-bg pull-right" onclick="SaveData()">提交</button>
                                    </div>
                                </div>
                            </div>

                    <div class="pub">
                        <p class="pub-title">
                            <span></span>政策图谱
                        </p>
                        <div class="tupu">
                            <img src="/Content/Images/tupu.png" width="100%" alt="">
                        </div>
                        <div>
                            <a href="#" onclick="GetCityTP()" onfocus="this.blur();">查看政策图谱</a>
                        </div>
                    </div>
                    <div class="hot-project">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/Content/Scripts/HighPayDemand.js"></script>
<script src="/Content/Scripts/public/comment.js?version=3.88"></script>
<script src="/Content/jQuery-emoji/lib/script/jquery.min.js"></script>
<script src="/Content/jQuery-emoji/lib/script/highlight.pack.js"></script>
<script src="/Content/jQuery-emoji/lib/script/jquery.mousewheel-3.0.6.min.js"></script>
<script src="/Content/jQuery-emoji/lib/script/jquery.mCustomScrollbar.min.js"></script>
<script src="/Content/jQuery-emoji/src/js/jquery.emoji.js"></script>
<script src="/Content/Scripts/jquery.fly.min.js"></script>
<script type="text/javascript">
    var mainId = '5b6aab6e-83b5-46c6-8d96-982953963946';
    var randomZan=4;
    var articleType = 'Policy';
    $(function () {
        InitCommentData();
        GetlocallocalStorage();
        var pmainId = $("#hidmainId").val();
        //     <button id="Subscribe" attr-IsSubscribe="true" onclick="checkLogo(Subscribe, '5b6aab6e-83b5-46c6-8d96-982953963946')"><i class="fa fa-plus" aria-hidden="true"></i>订阅</button>
        var strcompare =
            "<button id=\"joinCompare\" class=\"addBtn\" type=\"button\" onclick=\"Joincompare(event, this)\" rowId=" +
                pmainId +
                ">加入对比</button>";
        var storage = window.localStorage.getItem("czc_mainId");
        if (storage != null) {
            var arr = storage.split(",");
            for (var k = 0; k < arr.length; k++) {
                if (pmainId == arr[k]) {
                    strcompare =
                        "<button id=\"joinCompare\" class=\"cancelBtn\" onclick=\"Joincompare(event, this)\" rowId=" +
                        pmainId +
                        " type=\"button\" onclick=\"\">取消对比</button>";
                }
            }
        }
        $("#titleInfo").append(strcompare);
        zanInitialization();
    });

    function Subscribe(e) {
        var dom = $("#Subscribe");
        var IsSubscribe = dom.attr("attr-IsSubscribe");
        if (IsSubscribe == true) return;
        $.ajax({
            url: "/MC/Subscribe/SaveSubscribe?id=" + e,
            async: false,
            dataType: "json",
            success: function(data) {
                if (data.Result == true && data.Code == "1") {
                    dom.html("<i class='fa fa-check' aria-hidden='true'></i>已订阅");
                    dom.attr("attr-IsSubscribe", "true");
                } else if (data.Result == false && data.Code == "2") {
                    dom.html("<i class='fa fa-plus' aria-hidden='true'></i>订阅");
                    dom.attr("attr-IsSubscribe", "false");
                }
            }
        });

    }


    var isclick = false;

    function Joincompare(event, that) {
        var height = $('.toolbar').height() + 78;
        var offset = $(".compare").offset();
        var mainId = $(that).attr("rowId");
        var storage = window.localStorage;
        var nums = $('.Comparisonnum').html();
        var pename = $("#hidPename").val();
        var strHtml = "";
        if (isclick) {
            return;
        }
        if ($(that).attr("class").indexOf("addBtn") > -1) {
            if (storage.getItem("czc_mainId") != null) {
                if (parseInt(storage.getItem("czc_mainId").split(',').length) > parseInt(4)) {
                    parent.layer.msg("当前仅允许五条政策进行对比。", { icon: 5 });
                } else {
                    if (parseInt(nums) < parseInt(5)) {
                        var addcar = $(that);
                        var flyer = $('<img class="u-flyer" src="/Content/Images/fly.png">');
                        strHtml += "<li>";
                        strHtml += "<p>" + pename + "</p>";
                        strHtml += "<span onclick=\"removeLocal(this)\"></span>";
                        strHtml += "<input type=\"hidden\" id=\"hidmainId\" name=\"hidmainId\" value='" + mainId + "'>";
                        strHtml += "</li>";
                        flyer.fly({
                            start: {
                                left: event.clientX,
                                top: event.clientY
                            },
                            end: {
                                left: offset.left + 40,
                                top: height,
                                width: 0,
                                height: 0
                            },
                            onEnd: function() {
                                this.destory();
                            }
                        });
                        addcar.removeClass('addBtn');
                        addcar.addClass('cancelBtn');
                        addcar.html("取消对比");
                        nums++;
                        $('.Comparisonnum').html(nums);
                        $("#Comparison-list-unstyled").append(strHtml);
                        var arrtxt = storage.getItem("czc_mainId");
                        if (arrtxt != null) {
                            var arr = [arrtxt, mainId];
                            storage.setItem("czc_mainId", arr);
                        } else {
                            storage.setItem("czc_mainId", mainId);
                        }
                        Cookies.set('czc_mainId', storage.getItem("czc_mainId"), { expires: 36500 });
                    } else {
                        parent.layer.msg("当前仅允许五条政策进行对比。", { icon: 5 });
                    }
                }
            } else {
                if (parseInt(nums) < parseInt(5)) {
                    var addcar = $(that);
                    var flyer = $('<img class="u-flyer" src="/Content/Images/fly.png">');
                    strHtml += "<li>";
                    strHtml += "<p>" + pename + "</p>";
                    strHtml += "<span onclick=\"removeLocal(this)\"></span>";
                    strHtml += "<input type=\"hidden\" id=\"hidmainId\" name=\"hidmainId\" value='" + mainId + "'>";
                    strHtml += "</li>";
                    flyer.fly({
                        start: {
                            left: event.clientX,
                            top: event.clientY
                        },
                        end: {
                            left: offset.left + 40,
                            top: height,
                            width: 0,
                            height: 0
                        },
                        onEnd: function() {
                            this.destory();
                        }
                    });
                    addcar.removeClass('addBtn');
                    addcar.addClass('cancelBtn');
                    addcar.html("取消对比");
                    nums++;
                    $('.Comparisonnum').html(nums);
                    $("#Comparison-list-unstyled").append(strHtml);
                    var arrtxt = storage.getItem("czc_mainId");
                    if (arrtxt != null) {
                        var arr = [arrtxt, mainId];
                        storage.setItem("czc_mainId", arr);
                    } else {
                        storage.setItem("czc_mainId", mainId);
                    }
                    Cookies.set('czc_mainId', storage.getItem("czc_mainId"), { expires: 36500 });
                } else {
                    parent.layer.msg("当前仅允许五条政策进行对比。", { icon: 5 });
                }
            }

        } else {
            $(that).removeClass('cancelBtn');
            $(that).addClass('addBtn');
            $(that).html("加入对比");
            var strmainId = storage.getItem("czc_mainId").split(',');
            if (strmainId.length > 1) {
                var index = strmainId.indexOf(mainId);
                if (index > -1) {
                    strmainId.splice(index, 1);
                    storage.setItem("czc_mainId", strmainId);
                }
            } else {
                storage.removeItem("czc_mainId");
            }
            Cookies.set('czc_mainId', storage.getItem("czc_mainId"), { expires: 36500 });
            nums--;
            if (nums <= 0) {
                $('.Comparisonnum').html(0);
            } else {
                $('.Comparisonnum').html(nums);
            }
            GetlocallocalStorage();
        }
        isclick = false;
    }

    // 20190225 update daiyangsong
    function openUrl(obj) {
        var projecttext = $(obj).text();
        var urlh = projecttext.indexOf('h');
        if (urlh > -1) {
            var url = projecttext.substr(urlh);
            window.open(url, '_blank');
        }
    }

    var parms = [];
    var callMethod = null;

    function checkLogo(method, e) {
        callMethod = null;
        parms = [];
        parms.push(e);
        callMethod = method;
        var url = "/Login/New_Detail";
        $.ajax({
            url: "/Login/OnlyCheckOnLine",
            async: false,
            dataType: "json",
            success: function(data) {
                if (data.Success == false) {
                    layer.open({
                        type: 2,
                        title: '登录',
                        shadeClose: false,
                        shade: 0.4,
                        maxmin: false, //开启最大化最小化按钮
                        area: ['520px', '400px'],
                        content: url,
                        yes: function(index, layero) {
                        },
                        end: function(data) {
                        }
                    });
                } else {
                    callMethod.apply(window, parms);
                }
            }
        });
    }

    function removeLocal(obj) {
        var mainId = $(obj).siblings("#hidmainId").val();
        var strmainId = window.localStorage.getItem("czc_mainId").split(',');
        if (strmainId.length > 1) {
            var index = strmainId.indexOf(mainId);
            if (index > -1) {
                strmainId.splice(index, 1);
                window.localStorage.setItem("czc_mainId", strmainId);
            }
        } else {
            window.localStorage.removeItem("czc_mainId");
        }
        $(obj).parent().remove();
        Cookies.set('czc_mainId', window.localStorage.getItem("czc_mainId"), { expires: 36500 });
        if (window.localStorage != null) {
            if (window.localStorage.getItem("czc_mainId") != null) {
                strmainId = window.localStorage.getItem("czc_mainId").split(',');
                $('.Comparisonnum').html(strmainId.length);
            } else {
                $('.Comparisonnum').html(0);
            }
        } else {
            $('.Comparisonnum').html(0);
        }
        location.reload();
    }

    //查看政策图谱
    function GetCityTP() {
        window.open("/ProjectSearch/ChartIndex");
    }

    //点赞初始化
    function zanInitialization() {
        //加载表情包
        InitEmoji("div-base", "div-base-emoji");
        //getZan();

    }
    function GotoBusInfo(id) {
        window.open("/news/BusinessCardDetail?id=" + id + "&type=1&recordid=" + mainId);
    }
</script>

                        </div>

            </div>
        </div>
        <div class="footer footer-box">
            <div class="footer-wrapper">
                <div class="info-wrapper">
                    <div class="info">
                        <span class="info-item">
                            <a href="/Home/AboutUs?citycode=" title="关于我们" rel="nofollow">关于我们</a> | <a href="https://m.chacewang.com/" title="帮助中心" rel="nofollow">返回移动端</a>  
                        </span>
                    </div>
                    <div class="info" id="linkList">
                        友情链接：
                                    <a href='http://www.qwings.cn/' title='牵翼网' target='_blank'>牵翼网</a>
                                        <a> | </a><a href='http://dzjjhz.dezhou.gov.cn/n38778785/n38778894/c53571750/part/53571755.pdf' title='德州市投资促进局' target='_blank'>德州市投资促进局</a>
                                        <a> | </a><a href='http://jntzcjj.jinan.gov.cn/art/2020/4/7/art_54667_4186024.html' title='济南市投资促进局' target='_blank'>济南市投资促进局</a>

                    </div>
                    <div class="info">
                        <span class="info-item">
                            咨询电话：400-1516-916
                        </span>
                        <span class="info-item">E-mail：service@chacewang.com</span>
                    </div>
                    <div class="info">
                        地址：广东省深圳市龙华区五和大道星河WORLD二期C座31层
                    </div>
                    <div class="info">
                        ©2018-2020 查策网 版权所有
                    </div>
                    <div class="info">
                        <div class="pingt info-item">
                            <a href="http://www.beian.miit.gov.cn/" target="_blank" title="粤ICP备18024597号" rel="nofollow">粤ICP备18024597号&nbsp;</a>
                        </div>
                        <div class="pingt js-wangjian info-item" rel="nofollow">
                            
                            <a href="https://szcert.ebs.org.cn/6db755a7-8d67-428a-9a30-b64e50ed6328" target="_blank" rel="nofollow">
                                <img src="https://szcert.ebs.org.cn/Images/govIcon.gif" title="深圳市市场监督管理局企业主体身份公示" alt="深圳市市场监督管理局企业主体身份公示" width="36" height="50" border="0" style="border-width: 0px; border: hidden; border: none;">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slide-moda">
            <div class="moda-content">
                <p class="moda-title ">政策详情对比</p>
                <div class="compare-box">
                    <ul class="list-unstyled" id="Comparison-list-unstyled"></ul>
                </div>
                <div class="button-box">
                    <button class="btn btn-primary" onclick="projectCompare()" id="beginCompare">开始对比</button>
                </div>
                <div class="side-tip " onclick="compareProject()" style="cursor: pointer">对比</div>
                <hr />
                <p class="moda-title">部门政策对比</p>
                <div class="compare-box" id="Comparison-list-unstyledzc">
                </div>
                <div class="button-box">
                    <button class="btn btn-primary" onclick="deptComparrison()" id="beginCompares">开始对比</button>
                </div>
            </div>
        </div>
        <div class="toolbar">
            <ul class="toolbar-list">
                
                <li class="compare">
                    <div class="imgBox" onclick="OpenCompare()"></div>
                    <div class="Comparisonnum">0</div>
                </li>
                <li class="miniProgram">
                    <div class="imgBox"></div>
                    <p>小程序</p>
                    <div class="qrCodeBox">
                        <img src="/Content/Images/xiaochengxu.jpg" alt="小程序">
                    </div>
                </li>
                <li class="app">
                    <div class="imgBox"></div>
                    <p>app</p>
                    <div class="qrCodeBox">
                        <img src="/Content/Images/appDownload.png" alt="app">
                    </div>
                </li>
                <li class="livebroadcast">
                    <div class="imgBox"></div>
                    <p>课程</p>
                    <div class="qrCodeBox">
                        <img src="/Content/Images/file-read-227.png" alt="课程">
                    </div>
                </li>
                <li class="weixin">
                    <div class="imgBox"></div>
                    <p>微信</p>
                    <div class="qrCodeBox">
                        <img src="/Content/Images/kefu.jpg" alt="微信">
                    </div>
                </li>
                <li class="demand" onclick="OpenDemandRelease('/DemandRelease/Detail/', window.location.pathname, '技术标准补贴')">
                    <div class="imgBox"></div>
                    <p>需求</p>
                </li>
                <li class="kefu" onclick="open_win()">
                    <div class="imgBox"></div>
                    <p>客服</p>

                </li>
                <li class="stickToTop">
                    <div class="imgBox"></div>
                    <p>置顶</p>
                </li>
            </ul>
        </div>
    </div>
<script type="text/javascript">
    var oss = "/Home/Oss";
    var scene = '';
    var cityCode = 'RegisterArea_ZXS_Beijing';
    if (scene != null && scene != "") {
        localStorage.scene = scene;
    }
    var serviceId = '';
    if (serviceId != null && serviceId != "") {
        localStorage.serviceId = serviceId;
    }
    var accountstr ='';
    var headstr ='';

    $(document).ready(function () {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                $('.toolbar-list .stickToTop').addClass('active');
            } else {
                $('.toolbar-list .stickToTop').removeClass('active');
            }
        });

        $('.toolbar-list .stickToTop').click(function() {
            $('html,body').animate({ scrollTop: 0 }, 1000, "swing");
        });
        //点击页面其它部分隐藏右侧对比弹窗
        $(document).click(function(e) {
            $('.slide-moda').removeClass('active');
            $('.side-tip').removeClass('active');

        })
        //阻止点击对比框区域冒泡到document触发上面事件
        $('.slide-moda').click(function(event) {
            event.stopPropagation();
        });
        //点击对比胶囊按钮
        $('.side-tip').click(function(event) {
            if ($(this).hasClass('active')) {
                $('.slide-moda').addClass('active');
                $('.side-tip').addClass('active');

            } else {
                $('.slide-moda').removeClass('active');
                $('.side-tip').removeClass('active');
            }
            event.stopPropagation();
        });
    });
    //客服弹窗
    function open_win(){
        var url ='/mc/chat/TempIndex'; //url地址                            
        var name='dialogue';                           
        var iWidth = 800;                         
        var iHeight = 701;                    
        var iLeft = (window.screen.availWidth-20-iWidth);          
        var iTop = (window.screen.availHeight-70-iHeight);   
	    window.open(url,name,"toolbar=no, location=no,scrollbars=no, directories=no, status=no, menubar=no,  resizable=no, copyhistory=yes, width="+iWidth+", height="+iHeight+",top="+iTop+",left="+iLeft+"");
    }
</script>
    <script type="text/javascript" src="/Content/Scripts/public/areadata.js?version=3.88"></script>
    <script type="text/javascript" src="/Content/Scripts/public/layout-page.js?version=3.88"></script>

    <script type="text/javascript">
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?42c061ff773ed320147f84a5220d9dcc";
            hm.async = true;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?f9b4d143305c6f75248d93b7b5d8f6f1";
            hm.async = true;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</body>
</html>



`
