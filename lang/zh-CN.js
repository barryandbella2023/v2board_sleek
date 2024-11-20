window.settings = window.settings || {}
window.settings.i18n = window.settings.i18n || {}

window.settings.i18n['zh-CN'] = {
  common: {
    copyFailed: '复制失败',
    copySuccess: '复制成功',
    copyLink: '复制链接',
    submitFailed: '提交失败',
    submitSuccess: '提交成功',
    sendFailed: '发送失败',
    sendSuccess: '发送成功',
    cancelFailed: '取消失败',
    cancelSuccess: '取消成功',
    cancelFailedTip: '重新尝试刷新',
    editFailed: '修改失败',
    editSuccess: '修改成功',
    editTip: '请重新尝试',
    currency: 'CNY',
    loading: '加载中...',
    loadFailed: '加载失败,请刷新',
    submit: '提交',
    confirm: '确认',
    cancel: '取消',
    close: '关闭',
    back: '返回',
    error: {
      default: '操作失败',
      network: '网络错误',
      server: '服务器错误',
      open: '请重新打开',
      networkError: '网络错误，请稍后重试',
      input: '输入错误',
      account: '账户无效',
      amount: '金额无效',
      withdrawal: '提现失败',
      transfer: '划转失败',
      unknown: '未知错误',
      tryAgain: '请重新提交请求',
    },
    success: {
      default: '操作成功',
      saved: '保存成功',
      redirecting: '正在跳转首页...',
    },
    status: {
      online: '在线',
      offline: '离线',
      expired: '已过期',
      active: '生效中',
    },
    time: {
      days: '{n}天',
      hours: '{n}小时',
      minutes: '{n}分钟',
      seconds: '{n}秒',
    },
    unit: {
      currency: '¥',
      traffic: 'GB',
    },
    english: 'English',
    chinese: '中文',
  },

  auth: {
    passwordPlaceholder: '请输入密码',
    emailPlaceholder: '请输入邮箱',
    noAccount: '还没有注册？',
    hasAccount: '已有帐号？',
    forgotPassword: '忘记密码？',
    login: '登录',
    loginButton: '立即登录',
    loginSuccess: '登录成功',
    loginFailed: '登录失败',
    register: '注册',
    registerButton: '立即注册',
    registerSuccess: '注册成功',
    registerFailed: '注册失败',
    slogan: '开启全球冲浪',
    securityTip: '没有什么可担心的，双重加密保驾护航',
    email: '邮箱',
    password: '密码',
    recommendCode: '邀请码',
    recommendCodeRequired: '请输入邀请码（必填）',
    recommendCodeOptional: '请输入邀请码（可选）',
    newPassword: '新密码',
    confirmPassword: '确认密码',
    verificationCode: {
      title: '验证码',
      button: '发送验证码',
      placeholder: '请输入验证码',
      successTip: '请到邮箱查看',
      countdown: '{seconds}',
    },
    verifyHuman: '请完成人机验证',
    errors: {
      emailFormat: '账号格式错误',
      passwordFormat: '密码格式错误',
      codeFormat: '验证码格式错误',
      configLoadFailed: '配置加载失败，请刷新页面',
      emailRequired: '邮箱错误',
      emailRequiredTip: '请填写邮箱',
      emailInvalid: '邮箱错误',
      emailInvalidTip: '请填写正确的邮箱',
      passwordRequired: '{type}不能为空',
      passwordRequiredTip: '请输入密码',
      passwordInvalid: '{type}格式错误',
      passwordInvalidTip: '密码长度需要在8-50个字符之间',
      passwordSame: '新密码错误',
      passwordSameTip: '新密码不能与当前密码相同',
      verificationRequired: '验证码错误',
      verificationRequiredTip: '请填写验证码',
      verificationInvalid: '验证码错误',
      verificationInvalidTip: '请填写正确的验证码',
      inviteCodeRequired: '邀请码是必填项',
      apiError: '服务器错误，请稍后重试',
      loginRequired: '请先登录',
      unauthorized: '未授权访问',
      recaptchaFailed: '验证失败，请重试',
      recaptchaError: '验证出错，请重试',
      recaptchaExpired: '验证已过期，请重试',
      default: '操作失败，请重试',
      sessionExpired: '登录过期',
    },
  },

  passwordReset: {
    title: '重置密码',
    button: '立即重置',
    cancel: '取消重置',
    oldPassword: {
      label: '旧密码:',
      placeholder: '请输入旧密码',
    },
    newPassword: {
      label: '新密码:',
      placeholder: '请输入新密码',
    },
    password: {
      label: '密码:',
      placeholder: '请输入新密码',
    },
    email: {
      label: '邮箱:',
      placeholder: '请输入邮箱',
    },
    verificationCode: {
      label: '验证码:',
      placeholder: '验证码',
      button: '发送验证码',
    },
    success: {
      message: '重置成功',
      loginPrompt: '快去登录吧',
    },
    verification: {
      prompt: '请查看验证码',
      countdown: '{seconds}',
    },
    errors: {
      resetFailed: '重置失败',
      emailRequired: '邮箱不能为空',
      emailInvalid: '邮箱格式不正确',
      passwordRequired: '密码不能为空',
      passwordInvalid: '密码格式不正确',
      verificationRequired: '验证码不能为空',
      verificationInvalid: '验证码格式不正确',
      apiError: '服务器错误，请稍后重试',
      resetRequired: '邮箱、密码和验证码不能为空',
    },
  },

  home: {
    title: {
      main: '开启全球冲浪',
      features: [],
      subtitle: '没有什么可担心的，双重加密保驾护航',
    },
    media: {
      title: '支持的流媒体',
    },
    regions: {
      title: '可用地区',
      online: '在线',
    },
    pricing: {
      title: '套餐定价',
      subtitle: '优惠的价格，非常好的质量',
      currency: 'CNY',
      purchaseButton: '去购买',
    },
    auth: {
      dashboard: '个人中心',
    },
  },

  bulletin: {
    empty: '暂无公告',
    confirmButton: '我知道了 →',
  },

  emailNotification: {
    title: '通知设置',
    expireReminder: '到期邮件提醒',
    trafficReminder: '流量邮件提醒',
  },

  giftCard: {
    title: '礼品卡兑换',
    code: {
      label: '兑换码:',
      placeholder: '请输入礼品卡兑换码',
    },
    button: {
      redeem: '立即兑换',
      redeeming: '兑换中...',
      cancel: '取消',
    },
    success: {
      message: '兑换成功',
    },
    error: {
      message: '兑换失败',
      emptyCode: '请输入礼品卡兑换码',
      tip: '请重新尝试',
      invalidCode: '请输入有效的兑换码',
    },
  },

  telegram: {
    title: 'Telegram机器人',
    group: 'Telegram售后群',
    openTelegram: '打开Telegram',
    searchBot: '搜索机器人',
    copyCommand: '复制并发送以下命令',
  },

  subscription: {
    import: '导入到',
    qrCode: '扫描二维码',
    reset: {
      title: '确定重订阅吗？',
      description:
        '如果你的订阅地址或信息泄露可以进行此操作。重置后你的UUID及订阅将会变更，需要重新进行订阅。',
      confirm: '确定重置',
      cancel: '关闭',
      success: {
        title: '重置成功',
        message: '订阅已重置',
      },
      error: {
        title: '重置失败',
        message: '请稍后重试',
      },
    },
    status: {
      expired: '已过期',
      unlimited: '永久',
    },
  },

  dashboard: {
    title: '控制面板',
    userCard: {
      balance: '余额',
      commission: '佣金',
      subscription: {
        transfer: {
          total: '总流量',
          used: '已用流量',
          remaining: '剩余流量',
        },
        expiry: {
          title: '到期',
          unlimited: '永久',
        },
        import: {
          title: '导入订阅',
        },
      },
      emptyPlan: '点击订购套餐',
      buttons: {
        resetSubscription: '重置订阅',
        updatePassword: '修改密码',
        emailNotification: '邮件通知',
        giftCard: '礼品卡',
      },
    },
    tabs: {
      order: '订单列表',
      ticket: '工单列表',
      server: '节点信息',
    },
  },

  // 工单相关翻译
  ticket: {
    create: {
      button: '添加新工单',
      description: '有啥问题这里添加工单,会有客服给予回答',
    },
    table: {
      headers: {
        title: '主题',
        lastReply: '最后回复',
        status: '状态',
        actions: '操作',
      },
    },
    modal: {
      header: '添加新的工单',
      title: '标题',
      content: '描述内容',
      description: '请简要的描述您遇到的问题～',
    },
    status: {
      closed: '已关闭',
      pending: '待回复',
      replied: '已回复',
    },
    priority: {
      low: '不太着急',
      medium: '有点着急',
      high: '非常着急',
    },
    empty: '暂无工单',
    emptyFields: '请填写主题和内容',
    submitPrompt: '请等待客服回复',
    checkComplete: '请检查是否填写完整',
    fetchFailed: '获取工单失败',
    closedTip: '工单已关闭，如有新疑问，请添加新工单',
    staff: '客服',
    inputPlaceholder: '请输入内容',
    errors: {
      invalidId: '无效的工单ID',
      replyRequired: '工单ID和消息内容不能为空',
    },
  },

  // 邀请相关翻译
  invite: {
    orderCount: '下单人数:',
    stats: {
      title: '邀请统计',
      registeredUsers: '已注册用户数',
      totalCommission: '累计获得佣金',
      pendingCommission: '确认中的佣金',
      remainingCommission: '当前剩余佣金',
    },
    banner: {
      title: '连接保密之路，分享隐私有礼',
      subtitle: '邀请下单返百分之',
      copySuccess: '快去邀请新人吧',
      error: {
        linkNotReady: '邀请链接未就绪',
        tryAgain: '请稍后再试',
      },
    },
    table: {
      headers: {
        time: '发放时间',
        commission: '佣金',
        amount: '交易金额',
        status: '状态',
      },
      empty: '暂无邀请记录',
      status: {
        completed: '已完成',
      },
    },
    withdrawal: {
      title: '提现',
      prompt: '提现到填写账户',
      input: '请输入提现金额',
      success: '申请提现成功',
      successPrompt: '请等待管理员审核',
    },
    transfer: {
      title: '资金划转',
      prompt: '资金转换到余额，可用于购买订阅',
      input: '请填写金额',
      success: '资金划转成功',
    },
    code: {
      title: '邀请码列表',
      headers: {
        code: '邀请码',
        status: '状态',
        createdAt: '创建时间',
      },
      status: {
        used: '已使用',
        unused: '未使用',
      },
      empty: '暂无邀请码',
      generate: {
        button: '生成邀请码',
        title: '生成新的邀请码',
        description: '确定要生成一个新的邀请码吗？',
        confirm: '确定生成',
        cancel: '取消',
        success: {
          title: '生成成功',
          message: '已成功生成新的邀请码',
        },
        error: {
          title: '生成失败',
          message: '生成邀请码失败，请稍后重试',
        },
      },
    },
  },

  navigation: {
    dashboard: '控制面板',
    plan: '订阅套餐',
    knowledge: '使用文档',
    invite: '邀请返利',
    ticket: '工单系统',
    logout: '退出登录',
  },

  knowledge: {
    title: '使用文档',
    errors: {
      invalidId: '无效的文章ID',
    },
  },

  node: {
    name: '节点名称',
    type: '类型',
    rate: '倍率',
    status: '状态',
    empty: '暂无订阅',
  },

  order: {
    statusInfo: '订单状态',
    planName: '套餐名称',
    traffic: '流量',
    amount: '金额',
    actions: '操作',
    copyNumber: '复制单号',
    empty: '暂无订单',
    status: {
      pending: '待支付',
      success: '成功',
      cancelled: '取消',
    },
    errors: {
      tradeNoRequired: '订单号不能为空',
      checkoutRequired: '订单号和支付方式不能为空',
      createRequired: '订阅周期和套餐ID不能为空',
      couponRequired: '套餐ID和优惠券码不能为空',
      invalidAmount: '转账金额必须大于0',
      withdrawalRequired: '提现账户和提现方式不能为空',
    },
  },

  notFound: {
    title: '404',
    message: '页面未找到',
    backToHome: '返回首页',
  },

  payment: {
    pending: '您有订单未处理/未支付！',
    action: '去处理/去支付',
    title: '订单：',
    closeButton: '关闭/取消订单',
  },

  plan: {
    title: '购买套餐',
    details: {
      name: '套餐名称：',
      traffic: '周期流量：',
      speedLimit: '巅峰限速：',
      speedUnlimited: '无限制',
      configuration: '配置项：',
      payButton: '立即支付',
      payButtonTag: 'Go~',
    },
    coupon: {
      title: '优惠码',
      placeholder: '可选项',
      validateButton: '验证优惠码',
      inputRequired: '请输入优惠码',
      validateSuccess: '优惠码验证成功',
    },
    period: {
      title: '周期选项',
      month: '月付',
      quarter: '季付',
      halfYear: '半年',
      year: '年付',
      twoYear: '两年付',
      threeYear: '三年付',
      onetime: '一次性',
      reset: '重置价格',
    },
    order: {
      title: '订单详情',
      button: '去支付',
      createSuccess: '订单创建成功',
      createSuccessPrompt: '请支付',
      submitFailed: '订单提交失败！',
    },
    error: {
      selectPlan: '请选择套餐',
      invalidPlan: '套餐信息无效',
    },
  },
}
