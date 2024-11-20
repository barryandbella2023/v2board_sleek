window.settings = window.settings || {}
window.settings.i18n = window.settings.i18n || {}

window.settings.i18n['en-US'] = {
  common: {
    copyFailed: 'Copy failed',
    copySuccess: 'Copied successfully',
    copyLink: 'Copy link',
    submitFailed: 'Submit failed',
    submitSuccess: 'Submit successful',
    sendFailed: 'Send failed',
    sendSuccess: 'Send successful',
    cancelFailed: 'Cancel failed',
    cancelSuccess: 'Cancel successful',
    cancelFailedTip: 'Please try refreshing',
    editFailed: 'Edit failed',
    editSuccess: 'Edit successful',
    editTip: 'Please try again',
    currency: 'USD',
    loading: 'Loading...',
    loadFailed: 'Load failed, please refresh',
    submit: 'Submit',
    confirm: 'Confirm',
    cancel: 'Cancel',
    close: 'Close',
    back: 'Back',
    error: {
      default: 'Operation failed',
      network: 'Network error',
      server: 'Server error',
      open: 'Please reopen',
      networkError: 'Network error, please try again later',
      input: 'Input error',
      account: 'Invalid account',
      amount: 'Invalid amount',
      withdrawal: 'Withdrawal failed',
      transfer: 'Transfer failed',
      unknown: 'Unknown error',
    },
    success: {
      default: 'Operation successful',
      saved: 'Saved successfully',
      redirecting: 'Redirecting to homepage...',
    },
    status: {
      online: 'Online',
      offline: 'Offline',
      expired: 'Expired',
      active: 'Active',
    },
    time: {
      days: '{n} days',
      hours: '{n} hours',
      minutes: '{n} minutes',
      seconds: '{n} seconds',
    },
    unit: {
      currency: '$',
      traffic: 'GB',
    },
    english: 'English',
    chinese: 'Chinese',
  },

  auth: {
    passwordPlaceholder: 'Enter password',
    emailPlaceholder: 'Enter email',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    forgotPassword: 'Forgot password?',
    login: 'Sign In',
    loginButton: 'Sign In Now',
    loginSuccess: 'Login successful',
    loginFailed: 'Login failed',
    register: 'Sign Up',
    registerButton: 'Register Now',
    registerSuccess: 'Registration successful',
    registerFailed: 'Registration failed',
    slogan: 'Start Global Surfing',
    securityTip: 'Nothing to worry about, double encryption protection',
    email: 'Email',
    password: 'Password',
    recommendCode: 'Referral code',
    recommendCodeRequired: 'Enter Invite code (Required)',
    recommendCodeOptional: 'Enter Invite code (Optional)',
    newPassword: 'New password',
    confirmPassword: 'Confirm password',
    verificationCode: {
      title: 'Verification code',
      button: 'Send code',
      placeholder: 'Enter verification code',
      successTip: 'Please check your email',
      countdown: '{seconds}',
    },
    verifyHuman: 'Please Complete Verification',
    errors: {
      emailFormat: 'Invalid email format',
      passwordFormat: 'Invalid password format',
      codeFormat: 'Invalid verification code format',
      configLoadFailed: 'Failed to load configuration, please refresh',
      emailRequired: 'Email is required',
      emailRequiredTip: 'Please enter your email',
      emailInvalid: 'Invalid email',
      emailInvalidTip: 'Please enter a valid email',
      passwordRequired: '{type} is required',
      passwordRequiredTip: 'Please enter password',
      passwordInvalid: 'Invalid {type} format',
      passwordInvalidTip: 'Password must be 8-50 characters',
      passwordSame: 'New password error',
      passwordSameTip: 'New password cannot be the same as current password',
      verificationRequired: 'Verification code required',
      verificationRequiredTip: 'Please enter verification code',
      verificationInvalid: 'Invalid verification code',
      verificationInvalidTip: 'Please enter correct verification code',
      inviteCodeRequired: 'Invite code is required',
      apiError: 'Server error, please try again later',
      loginRequired: 'Please sign in first',
      unauthorized: 'Unauthorized access',
      recaptchaFailed: 'Verification failed, please try again',
      recaptchaError: 'Verification error, please try again',
      recaptchaExpired: 'Verification expired, please try again',
      default: 'Operation failed, please try again',
      sessionExpired: 'Session expired',
    },
  },

  passwordReset: {
    title: 'Reset Password',
    button: 'Reset Now',
    cancel: 'Cancel Reset',
    oldPassword: {
      label: 'Old Password:',
      placeholder: 'Enter old password',
    },
    newPassword: {
      label: 'New Password:',
      placeholder: 'Enter new password',
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter new password',
    },
    email: {
      label: 'Email:',
      placeholder: 'Enter email',
    },
    verificationCode: {
      label: 'Verification Code:',
      placeholder: 'Verification code',
      button: 'Send Code',
    },
    success: {
      message: 'Reset successful',
      loginPrompt: 'Please sign in',
    },
    verification: {
      prompt: 'Please check verification code',
      countdown: '{seconds}',
    },
    errors: {
      resetFailed: 'Reset failed',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email format',
      passwordRequired: 'Password is required',
      passwordInvalid: 'Invalid password format',
      verificationRequired: 'Verification code is required',
      verificationInvalid: 'Invalid verification code format',
      apiError: 'Server error, please try again later',
      resetRequired: 'Email, password and verification code are required',
    },
  },

  home: {
    title: {
      main: 'Start Global Surfing',
      features: [],
      subtitle: 'Nothing to worry about, double encryption protection',
    },
    media: {
      title: 'Supported Streaming Services',
    },
    regions: {
      title: 'Available Regions',
      online: 'Online',
    },
    pricing: {
      title: 'Subscription Plans',
      subtitle: 'Great quality at competitive prices',
      currency: 'USD',
      purchaseButton: 'Purchase',
    },
    auth: {
      dashboard: 'Dashboard',
    },
  },

  bulletin: {
    empty: 'No announcements',
    confirmButton: 'I understand →',
  },

  emailNotification: {
    title: 'Notification Settings',
    expireReminder: 'Expiration Email Reminder',
    trafficReminder: 'Traffic Email Reminder',
  },

  giftCard: {
    title: 'Redeem Gift Card',
    code: {
      label: 'Redemption Code:',
      placeholder: 'Enter gift card code',
    },
    button: {
      redeem: 'Redeem Now',
      redeeming: 'Redeeming...',
      cancel: 'Cancel',
    },
    success: {
      message: 'Redemption successful',
    },
    error: {
      message: 'Redemption failed',
      emptyCode: 'Please enter gift card code',
      tip: 'Please try again',
      invalidCode: 'Please enter a valid redemption code',
    },
  },

  telegram: {
    title: 'Telegram Bot',
    group: 'Telegram Support Group',
    openTelegram: 'Open Telegram',
    searchBot: 'Search Bot',
    copyCommand: 'Copy and send the following command',
  },

  subscription: {
    import: 'Import to',
    qrCode: 'Scan QR Code',
    reset: {
      title: 'Confirm Reset Subscription?',
      description:
        'If your subscription address or information is leaked, you can perform this operation. After resetting, your UUID and subscription will be changed, and you need to resubscribe.',
      confirm: 'Confirm Reset',
      cancel: 'Close',
      success: {
        title: 'Reset Successful',
        message: 'Subscription has been reset',
      },
      error: {
        title: 'Reset Failed',
        message: 'Please try again later',
      },
    },
    status: {
      expired: 'Expired',
      unlimited: 'Unlimited',
    },
  },

  dashboard: {
    title: 'Dashboard',
    userCard: {
      balance: 'Balance',
      commission: 'Commission',
      subscription: {
        transfer: {
          total: 'Total Traffic',
          used: 'Used Traffic',
          remaining: 'Remaining Traffic',
        },
        expiry: {
          title: 'Expires',
          unlimited: 'Unlimited',
        },
        import: {
          title: 'Import Subscription',
        },
      },
      emptyPlan: 'Click to purchase plan',
      buttons: {
        resetSubscription: 'Reset Subscription',
        updatePassword: 'Change Password',
        emailNotification: 'Email Notifications',
        giftCard: 'Gift Card',
      },
    },
    tabs: {
      order: 'Orders',
      ticket: 'Tickets',
      server: 'Nodes',
    },
  },

  ticket: {
    create: {
      button: 'New Ticket',
      description: 'Add a ticket here for any questions, customer service will respond',
    },
    table: {
      headers: {
        title: 'Subject',
        lastReply: 'Last Reply',
        status: 'Status',
        actions: 'Actions',
      },
    },
    modal: {
      header: 'Add New Ticket',
      title: 'Title',
      content: 'Description',
      description: 'Please briefly describe your issue~',
    },
    status: {
      closed: 'Closed',
      pending: 'Pending',
      replied: 'Replied',
    },
    priority: {
      low: 'Not Urgent',
      medium: 'Somewhat Urgent',
      high: 'Very Urgent',
    },
    empty: 'No tickets',
    emptyFields: 'Please fill in subject and content',
    submitPrompt: 'Please wait for customer service response',
    checkComplete: 'Please check if all fields are completed',
    fetchFailed: 'Failed to fetch tickets',
    closedTip: 'Ticket is closed. For new questions, please create a new ticket',
    staff: 'Staff',
    inputPlaceholder: 'Enter content',
    errors: {
      invalidId: 'Invalid ticket ID',
      replyRequired: 'Ticket ID and message content are required',
    },
  },

  invite: {
    orderCount: 'Orders:',
    stats: {
      title: 'Invitation Statistics',
      registeredUsers: 'Registered Users',
      totalCommission: 'Total Commission',
      pendingCommission: 'Pending Commission',
      remainingCommission: 'Current Commission',
    },
    banner: {
      title: 'Connect Securely, Share for Rewards',
      subtitle: 'Earn commission percentage for invites',
      copySuccess: 'Go invite new users',
      error: {
        linkNotReady: 'Invitation link not ready',
        tryAgain: 'Please try again later',
      },
    },
    table: {
      headers: {
        time: 'Time',
        commission: 'Commission',
        amount: 'Amount',
        status: 'Status',
      },
      empty: 'No invitation records',
      status: {
        completed: 'Completed',
      },
    },
    withdrawal: {
      title: 'Withdraw',
      prompt: 'Withdraw to account',
      input: 'Enter withdrawal amount',
      success: 'Withdrawal request submitted',
      successPrompt: 'Please wait for admin review',
    },
    transfer: {
      title: 'Transfer Funds',
      prompt: 'Convert funds to balance for subscription purchase',
      input: 'Enter amount',
      success: 'Transfer successful',
    },
    code: {
      title: 'Invite Codes',
      headers: {
        code: 'Invite Code',
        status: 'Status',
        createdAt: 'Created Time',
      },
      status: {
        used: 'Used',
        unused: 'Unused',
      },
      empty: 'No invite codes',
      generate: {
        button: 'Generate Code',
        title: 'Generate New Invite Code',
        description: 'Are you sure you want to generate a new invite code?',
        confirm: 'Generate',
        cancel: 'Cancel',
        success: {
          title: 'Generated Successfully',
          message: 'New invite code has been generated',
        },
        error: {
          title: 'Generation Failed',
          message: 'Failed to generate invite code, please try again later',
        },
      },
    },
  },

  navigation: {
    dashboard: 'Dashboard',
    plan: 'Plans',
    knowledge: 'Documentation',
    invite: 'Referrals',
    ticket: 'Support',
    logout: 'Sign Out',
  },

  knowledge: {
    title: 'Documentation',
    errors: {
      invalidId: 'Invalid article ID',
    },
  },

  node: {
    name: 'Node Name',
    type: 'Type',
    rate: 'Rate',
    status: 'Status',
    empty: 'No subscription',
  },

  order: {
    statusInfo: 'Order Status',
    planName: 'Plan Name',
    traffic: 'Traffic',
    amount: 'Amount',
    actions: 'Actions',
    copyNumber: 'Copy Order Number',
    empty: 'No orders',
    status: {
      pending: 'Pending',
      success: 'Success',
      cancelled: 'Cancelled',
    },
    errors: {
      tradeNoRequired: 'Order number is required',
      checkoutRequired: 'Order number and payment method are required',
      createRequired: 'Subscription period and plan ID are required',
      couponRequired: 'Plan ID and coupon code are required',
      invalidAmount: 'Transfer amount must be greater than 0',
      withdrawalRequired: 'Withdrawal account and method are required',
    },
  },

  notFound: {
    title: '404',
    message: 'Page Not Found',
    backToHome: 'Back to Home',
  },

  payment: {
    pending: 'You have pending/unpaid orders!',
    action: 'Process/Pay',
    title: 'Order:',
    closeButton: 'Close/Cancel Order',
  },

  plan: {
    title: 'Purchase Plan',
    details: {
      name: 'Plan Name:',
      traffic: 'Period Traffic:',
      speedLimit: 'Speed Limit:',
      speedUnlimited: 'Unlimited',
      configuration: 'Configuration:',
      payButton: 'Pay Now',
      payButtonTag: 'Go~',
    },
    coupon: {
      title: 'Coupon',
      placeholder: 'Optional',
      validateButton: 'Validate Coupon',
      inputRequired: 'Please enter coupon code',
      validateSuccess: 'Coupon validated successfully',
    },
    period: {
      title: 'Period Options',
      month: 'Monthly',
      quarter: 'Quarterly',
      halfYear: 'Semi-Annual',
      year: 'Annual',
      twoYear: 'Two Years',
      threeYear: 'Three Years',
      onetime: 'One-time',
      reset: 'Reset Price',
    },
    order: {
      title: 'Order Details',
      button: 'Pay',
      createSuccess: 'Order created successfully',
      createSuccessPrompt: 'Please pay',
      submitFailed: 'Order submission failed!',
    },
    error: {
      selectPlan: 'Please select a plan',
      invalidPlan: 'Invalid plan information',
    },
  },
}
