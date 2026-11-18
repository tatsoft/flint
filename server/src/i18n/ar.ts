/**
 * Arabic server messages — translation of the English catalog.
 * Only user-facing strings live here (API errors, sync results, diagnostics...);
 * log messages are always plain English literals and never localized.
 */
export const ar = {
  /* ---------- sync ---------- */
  'sync.unknownAgent': 'وكيل غير معروف: {agent}',
  'sync.mkdirFailed': 'تعذّر إنشاء الدليل {dir}: {msg}',
  'sync.externalLink': 'يوجد رابط خارجي، لم يتم استبداله تلقائيًا: {dir}',
  'sync.realDirMismatch': 'يوجد دليل حقيقي بنفس الاسم ليس نسخة منشورة بواسطة هذه الأداة، ولم يتم استبداله: {dir}',
  'sync.fileExists': 'يوجد ملف بنفس الاسم مسبقًا، ولم يتم استبداله: {dir}',
  'sync.symlinkFallback': '{name}: الرابط الرمزي غير متاح، تم الرجوع إلى النسخ ({msg})',

  /* ---------- diagnose ---------- */
  'diag.configOk': 'تم تحميل الإعدادات: {path}',
  'diag.configMissing': 'ملف الإعدادات غير موجود؛ سيتم استخدام الإعدادات الافتراضية',
  'diag.noRepos': 'لا يوجد مستودع مهارات مُهيّأ',
  'diag.repoMissing': 'دليل المستودع {id} مفقود: {path}',
  'diag.repoOk': 'المستودع {id} @ {path}',
  'diag.repoNestedSkills': 'المستودع {id}: توجد {n} مهارة في أدلة فرعية تصنيفية وغير معترف بها ({names}). المستودعات الخاصة مسطّحة فقط — انقلها إلى الجذر، أو سجّل ذلك المجلد كمصدر للقراءة فقط',
  'diag.fsrc': 'المصدر الخارجي {id}: {path}',
  'diag.noProjects': 'لا يوجد مشروع مسجّل (لا شيء للتحقق)',
  'diag.projectMissing': 'مسار المشروع مفقود: {path}',
  'diag.projectNoAgents': 'المشروع {path} (مسجّل، لم يتم إنشاء .agents/skills بعد)',
  'diag.syncMissing': 'مفقود {n}',
  'diag.syncExtra': 'إضافي {n}',
  'diag.syncBroken': 'معطوب {n}',
  'diag.syncOk': '{agent}: {n} مطلوب · متزامن',
  'diag.syncBad': '{agent}: {n} مطلوب · {parts}',
  'diag.syncNone': 'لا يوجد وكيل نشط؛ لم تتم المقارنة',
  'diag.brokenFound': '{agent} يحتوي على رابط معطوب: {name}',
  'diag.noBroken': 'لا يوجد رابط معطوب',
  'diag.dupFound': '{name} لديه {n} مصادر للدمج',
  'diag.noDup': 'لا يوجد تعدد مصادر بنفس الاسم',
  'diag.contentSec': '{name} · {loc} · {rule}',
  'diag.contentAllOk': 'اجتازت فحوصات المحتوى لـ {n} مهارة من المستودع الخاص',
  'diag.contentNoOwn': 'لا توجد مهارة من المستودع الخاص لفحصها',
  'diag.contentItem': '{name}: {msg}',
  'diag.content.yaml': 'تعذّر تحليل frontmatter في SKILL.md (YAML تالف)',
  'diag.content.missing-name': 'frontmatter في SKILL.md يفتقد "name"',
  'diag.content.missing-description': 'frontmatter في SKILL.md يفتقد "description"',
  'diag.content.name-dir-mismatch': 'اسم frontmatter يختلف عن اسم الدليل؛ قد تفشل بعض الوكلاء في تحميله',
  'diag.content.name-slug': 'اسم frontmatter ليس بأسلوب الأحرف الصغيرة والشرطات',

  /* ---------- content security rules (F1) ---------- */
  'sec.rule.pipeToShell': 'تنفيذ تعليمات برمجية عن بُعد: توجيه تنزيل إلى shell',
  'sec.rule.bashCRemote': 'تنفيذ تعليمات برمجية عن بُعد: shell -c مع استبدال الأوامر',
  'sec.rule.reverseShell': 'shell عكسي عبر /dev/tcp',
  'sec.rule.netcatExec': 'تنفيذ أوامر Netcat (-e)',
  'sec.rule.powershellIex': 'تنفيذ تعليمات برمجية في PowerShell (IEX / Invoke-Expression)',
  'sec.rule.rmRfAbsolute': 'حذف تدميري تكراري على مسار جذر',
  'sec.rule.evalCall': 'تقييم ديناميكي للتعليمات البرمجية (eval)',
  'sec.rule.childProcess': 'استخدام child_process في Node.js',
  'sec.rule.subprocessShell': 'Python subprocess مع shell=True',
  'sec.rule.osSystem': 'تنفيذ Python os.system',
  'sec.rule.sudo': 'تصعيد الصلاحيات عبر sudo',
  'sec.rule.chmod777': 'أذونات الكتابة للجميع (chmod 777)',
  'sec.rule.shellRcWrite': 'الكتابة إلى ملف بدء تشغيل shell',
  'sec.rule.openaiKey': 'مفتاح OpenAI API مضمّن بشكل صريح',
  'sec.rule.anthropicKey': 'مفتاح Anthropic API مضمّن بشكل صريح',
  'sec.rule.awsAccessKey': 'مفتاح وصول AWS مضمّن بشكل صريح',
  'sec.rule.githubPat': 'رمز GitHub مضمّن بشكل صريح',
  'sec.rule.githubPatFine': 'رمز GitHub دقيق مضمّن بشكل صريح',
  'sec.rule.slackToken': 'رمز Slack مضمّن بشكل صريح',
  'sec.rule.googleApiKey': 'مفتاح Google API مضمّن بشكل صريح',
  'sec.rule.stripeKey': 'مفتاح Stripe السري مضمّن بشكل صريح',
  'sec.rule.npmToken': 'رمز npm مضمّن بشكل صريح',
  'sec.rule.privateKeyBlock': 'كتلة مفتاح خاص مضمّنة',
  'sec.rule.genericSecret': 'إسناد بيانات اعتماد مضمّن بشكل صريح',
  'sec.rule.ignorePrevious': 'حقن أوامر: تجاهل التعليمات السابقة',
  'sec.rule.disregardRules': 'حقن أوامر: تجاهل القواعد الموجودة',
  'sec.rule.ignorePreviousZh': 'حقن أوامر: تجاهل التعليمات السابقة (zh)',
  'sec.rule.disregardRulesZh': 'حقن أوامر: تجاوز قواعد النظام (zh)',
  'sec.rule.dontTellUser': 'تعليمات بإخفاء السلوك عن المستخدم',
  'sec.rule.hideFromUserZh': 'تعليمات بإخفاء السلوك عن المستخدم (zh)',
  'sec.rule.asOfNowIgnore': 'حقن أوامر: "من الآن فصاعدًا، تجاهل ..."',
  'sec.rule.jailbreak': 'صياغة كسر القيود / الوضع غير المقيّد',
  'sec.rule.zeroWidth': 'محارف عرض صفري (نص مخفي محتمل)',
  'sec.rule.bidiControl': 'محارف تحكم ثنائية الاتجاه (تزييف النص)',
  'sec.rule.unicodeTags': 'محارف وسم Unicode (حمولة غير مرئية)',
  'sec.rule.longBase64': 'كتلة base64 طويلة (حمولة مشفّرة محتملة)',

  /* ---------- fix ---------- */
  'fix.resynced': 'تمت إعادة مزامنة {agent}',
  'fix.resyncedActive': 'تمت إعادة مزامنة الوكلاء النشطين؛ تم مسح الروابط المعطوبة',
  'fix.projectReady': 'تم ضمان بنية المشروع: {path}',
  'fix.repoNotFound': 'المستودع غير موجود',
  'fix.repoCreated': 'تم إنشاء دليل المستودع: {path}',
  'fix.tagsMigrated': 'تم ترحيل وسوم {n} مهارة إلى frontmatter',
  'fix.nothing': 'هذا العنصر لا يحتاج إلى إصلاح تلقائي',

  /* ---------- takeover ---------- */
  'takeover.repoMissing': 'المستودع غير موجود: {id}',
  'takeover.copyMissing': 'نسخة المستودع من {name} غير موجودة؛ اجمعها أولاً',
  'takeover.srcMissing': 'مدخل المصدر {name} غير موجود',
  'takeover.isRepoBody': '{name} في دليل المصدر هو بالفعل جسم المستودع؛ لا حاجة للاستحواذ',
  'takeover.needConfirm': 'الاستحواذ يستبدل مدخل هذا الدليل برابط إلى نسخة المستودع؛ يرجى التأكيد',
  'takeover.agentNotInstalled': 'الوكيل غير مثبّت: {key}',

  /* ---------- projects ---------- */
  'projects.notRegistered': 'المشروع غير مسجّل',
  'projects.noRepo': 'لا يوجد مستودع لإعادة الدفع إليه',
  'projects.noAgentsDir': 'المشروع لا يحتوي على .agents/skills بعد',
  'projects.notInRepo': '{name} (لا توجد مهارة بنفس الاسم في المستودع، لم تتم إعادة الكتابة)',
  'projects.takeoverConfirm': 'الاستحواذ يستبدل {name} في المشروع بنسخة المستودع؛ يرجى التأكيد',
  'projects.pathMissing': 'المسار غير موجود: {path}',
  'projects.alreadyRegistered': 'المشروع مسجّل بالفعل',

  /* ---------- collect ---------- */
  'collect.sourceMissing': '(دليل المصدر غير موجود: {name})',
  'collect.srcUnreachable': '{name} (المصدر غير قابل للوصول: {msg})',
  'collect.existsSkip': '{name} (موجود بالفعل، تم تخطيه كتكرار)',
  'collect.sameBody': '{name} (المصدر ونسخة المستودع نفس الجسم؛ تم تخطي الاستبدال)',
  'collect.overwriteFailed': '{name} (فشل الاستبدال: {msg})',
  'collect.copyFailed': '{name} ({msg})',
  'collect.agentNotInstalled': '(الوكيل غير مثبّت: {key})',

  /* ---------- import ---------- */
  'import.pathMissing': 'المسار غير موجود',
  'import.dirMissing': '(المسار غير موجود)',
  'import.noRepo': '(لا يوجد مستودع للاستيراد إليه)',
  'import.srcUnreachable': '{name} (المصدر غير قابل للوصول: {msg})',
  'import.existsSkip': '{name} (موجود بالفعل، تم تخطيه كتكرار)',
  'import.failed': '{name} ({msg})',

  /* ---------- merge / presets ---------- */
  'merge.skillNotFound': 'المهارة غير موجودة: {name}',
  'preset.exists': 'الإعداد المسبق موجود بالفعل: {name}',
  'preset.notFound': 'الإعداد المسبق غير موجود: {name}',

  /* ---------- picker ---------- */
  'picker.title.dir': 'Skills Hub — اختر مجلدًا',
  'picker.title.file': 'Skills Hub — اختر ملفًا',
  'picker.unavailableDir': 'تعذّر فتح منتقي المجلدات في النظام: {msg}. يرجى كتابة المسار يدويًا.',
  'picker.unavailableFile': 'تعذّر فتح منتقي الملفات في النظام: {msg}. يرجى كتابة المسار يدويًا.',
  'picker.notFound': 'لا يوجد منتقي أصلي (zenity / kdialog) متاح في هذه البيئة؛ يرجى كتابة المسار يدويًا.',

  /* ---------- card actions ---------- */
  'card.collect': 'جمع إلى المستودع',
  'card.collect.title': 'انسخ هذه المهارة إلى مستودعك حتى يتمكن كل وكيل / مشروع من مشاركتها؛ يبقى الأصل في هذا الدليل دون تغيير',
  'card.delete': 'حذف',
  'card.delete.title': 'إزالة هذه المهارة من هذا الدليل (لا يمكن التراجع)',
  'card.disable': 'تعطيل',
  'card.disable.title': 'تعطيل هذه المهارة (إيقاف توزيعها)',
  'card.enable': 'تمكين',
  'card.enable.title': 'تمكين هذه المهارة',

  /* ---------- route-level errors ---------- */
  'api.repoExists': 'المستودع {id} موجود بالفعل',
  'api.agentExists': 'الوكيل {key} موجود بالفعل',
  'api.noInstalledAgent': 'لا يوجد وكيل مثبّت للجمع منه',
  /* ---------- register preview ---------- */
  'register.idEmpty': 'يجب ألا يكون المعرّف فارغًا',
  'register.idInvalid': 'معرّف غير صالح {id}: يُسمح فقط بالحروف والأرقام و . _ -، مع البدء بحرف أو رقم',
  'register.gitUrlEmpty': 'يجب ألا يكون رابط Git فارغًا',
  'register.gitUrlInvalid': 'رابط Git غير مدعوم {url}: استخدم https:// أو ssh:// أو git:// أو file:// أو user@host:path',
  'register.gitCloneFailed': 'فشل استنساخ مستودع Git',
  'register.gitCloneTimeout': 'انتهت مهلة استنساخ مستودع Git',
  'register.npxPkgEmpty': 'يجب ألا يكون اسم حزمة npm فارغًا',
  'register.npxPkgInvalid': 'اسم حزمة npm غير مدعوم {pkg}: يُسمح فقط بالحروف والأرقام و - _ . ~؛ ويُسمح بـ @scope/name و @version',
  'register.npxArgsInvalid': 'يجب ألا تحتوي وسائط التثبيت على محارف تحكم',
  'register.npxCmdNoPkg': 'تعذّر تحديد حزمة npm من الأمر — جرّب: npx <package> <subcommand>',
  'register.npxInstallFailed': 'فشل أمر تثبيت npx',
  'register.npxInstallTimeout': 'انتهت مهلة أمر تثبيت npx',
  'register.npxInstallIdle': 'لم يُنتج المثبّت أي مخرجات لفترة طويلة واعتُبر متوقفًا وتم إنهاؤه — تحقق مما إذا كان الأمر يحتاج إلى تأكيد تفاعلي، أو استخدم أعلامًا تدعم التنفيذ غير التفاعلي',
  'register.zeroSkills': 'لم يتم العثور على مهارات في ذلك الدليل (دليل المهارة يحتوي على SKILL.md) — لا يمكن التسجيل؛ تحقق من أن المسار يشير إلى المهارات',
  'api.skillEnabled': 'هذه المهارة ممكّنة حاليًا؛ عطّلها أولاً (أزلها من المجموعة المطلوبة) قبل الحذف',
  'api.noRepoToCollect': 'لا يوجد مستودع للجمع فيه',
} as const;

/** Key union derived from the Arabic catalog. */
export type MsgKey = keyof typeof ar;