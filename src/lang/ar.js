export default {

    name: "أبلكيشن",

    login: "تسجيل الدخول",
    register: "تسجيل",
    logout: "تسجيل الخروج",
    settings: "الإعدادات",
    general_settings: "الإعدادات العامة",
    language: "اللغة الإفتراضية",
    back: "رجوع",
    ok: "موافق",
    profile: "البروفايل",
    news_feed: "البداية",
    close: "إغلاق",
    open_popup: "فتح البوب اب",
    connection_error: "خطأ في الإتصال",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    register_new_account: "تسجيل حساب جديد",
    first_name: "الإسم",
    last_name: "اللقب",
    confirm_password: "تأكيد كلمة المرور",
    have_an_account: "لديك حساب ؟ تسجيل الدخول",
    login_success: "تم تسجيل الدخول بنجاح",
    register_success: "تم التسجيل بنجاح",
    logout_success: "تم تسجيل الخروج بنجاح",

    messages: {
        _default: function (n) {
            return "قيمة الحقل " + n + " غير صحيحة."
        }, after: function (n, e) {
            var r = e[0];
            return n + " يجب ان يكون بعد " + r + "."
        }, alpha_dash: function (n) {
            return n + " قد يحتوي على حروف او الرموز - و _."
        }, alpha_num: function (n) {
            return n + " قد يحتوي فقط على حروف وارقام."
        }, alpha_spaces: function (n) {
            return n + " قد يحتوي فقط على حروف ومسافات."
        }, alpha: function (n) {
            return n + " يجب ان يحتوي على حروف فقط."
        }, before: function (n, e) {
            var r = e[0];
            return n + " يجب ان يكون قبل " + r + "."
        }, between: function (n, e) {
            var r = e[0], t = e[1];
            return "قيمة " + n + " يجب ان تكون ما بين " + r + " و " + t + "."
        }, confirmed: function (n, e) {
            e[0];
            return n + " لا يماثل التأكيد."
        }, date_between: function (n, e) {
            var r = e[0], t = e[1];
            return n + " يجب ان يكون ما بين " + r + " و " + t + "."
        }, date_format: function (n, e) {
            var r = e[0];
            return n + " يجب ان يكون على هيئة " + r + "."
        }, decimal: function (n, e) {
            void 0 === e && (e = ["*"]);
            var r = e[0];
            return n + " يجب ان يكون قيمة رقمية وقد يحتوي على " + ("*" === r ? "" : r) + " ارقام عشرية."
        }, digits: function (n, e) {
            var r = e[0];
            return n + " يجب ان تحتوي فقط على ارقام والا يزيد عددها عن " + r + " رقم."
        }, dimensions: function (n, e) {
            var r = e[0], t = e[1];
            return n + " يجب ان تكون بمقاس " + r + " بكسل في " + t + " بكسل."
        }, email: function (n) {
            return n + " يجب ان يكون بريدا اليكتروني صحيح."
        }, ext: function (n) {
            return "نوع ملف " + n + " غير صحيح."
        }, image: function (n) {
            return n + " يجب ان تكون صورة."
        }, in: function (n) {
            return "الحقل " + n + " يجب ان يكون قيمة صحيحة."
        }, ip: function (n) {
            return n + " يجب ان يكون ip صحيح."
        }, max: function (n, e) {
            var r = e[0];
            return "الحقل " + n + " يجب ان يحتوي على " + r + " حروف على الأكثر."
        }, mimes: function (n) {
            return "نوع ملف " + n + " غير صحيح."
        }, min: function (n, e) {
            var r = e[0];
            return "الحقل " + n + " يجب ان يحتوي على " + r + " حروف على الأقل."
        }, not_in: function (n) {
            return "الحقل " + n + " غير صحيح."
        }, numeric: function (n) {
            return n + " يمكن ان يحتوي فقط على ارقام."
        }, regex: function (n) {
            return "الحقل " + n + " غير صحيح."
        }, required: function (n) {
            return n + " مطلوب."
        }, size: function (n, e) {
            var r = e[0];
            return n + " يجب ان يكون اقل من " + r + " كيلوبايت."
        }, url: function (n) {
            return "الحقل " + n + " يجب ان يكون رابطاً صحيحاً."
        },
    },

    attributes: {
        username: "إسم المستخدم",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        repassword: "تأكيد كلمة المرور",
        first_name: "الإسم الأول",
        last_name: "الإسم الأخير"
    }

}
