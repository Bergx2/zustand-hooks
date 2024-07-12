module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow destructuring of specific Zustand hooks',
      category: 'Best Practices',
      recommended: false,
    },
    schema: [],
    messages: {
      noDestructure: 'Destructuring {{hookName}} is not allowed. Use a function callback instead.',
    },
  },
  create(context) {
    const restrictedHooks = [
      "useAppState", "useBonusState", "useCasinoState", "useLiveCategories", "useQuickLinksState",
      "useLimitsState", "useNewsState", "useWalletsState", "useRegisterState", "useRouterState",
      "useSliderState", "useSupportState", "useUserState", "useAccount", "useBets", "useBettingSlip",
      "useCashoutState", "useEventsListState", "useFavoritesState", "useOddsComparison",
      "usePaymentsState", "useProfile", "usePushNotificationsState", "useTransactions"
    ];

    return {
      VariableDeclarator(node) {
        if (
          node.id.type === 'ObjectPattern' &&
          node.init &&
          node.init.type === 'CallExpression' &&
          restrictedHooks.includes(node.init.callee.name)
        ) {
          context.report({
            node,
            messageId: 'noDestructure',
            data: {
              hookName: node.init.callee.name
            }
          });
        }
      },
    };
  },
};
