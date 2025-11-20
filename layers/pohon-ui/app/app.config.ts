// @unocss-include

import { defineAppConfig } from '#imports';
import { accordionTheme } from './themes/accordion.theme';
import { alertTheme } from './themes/alert.theme';
import { avatarGroupTheme, avatarTheme } from './themes/avatar.theme';
import { badgeTheme } from './themes/badge.theme';
import { bannerTheme } from './themes/banner.theme';
import { breadcrumbTheme } from './themes/breadcrumb.theme';
import { buttonTheme } from './themes/button.theme';
import { calendarTheme } from './themes/calendar.theme';
import { cardTheme } from './themes/card.theme';
import { carouselTheme } from './themes/carousel.theme';
import { checkboxGroupTheme, checkboxTheme } from './themes/checkbox.theme';
import { chipTheme } from './themes/chip.theme';
import { colorPickerTheme } from './themes/color-picker.theme';
import { commandPaletteTheme } from './themes/command-palette.theme';
import { contentNavigationTheme } from './themes/content-navigation.theme';
import { contentSearchTheme } from './themes/content-search.theme';
import { contentSurroundTheme } from './themes/content-surround.theme';
import { contentTocTheme } from './themes/content-toc.theme';
import { contextMenuTheme } from './themes/context-menu.theme';
import { dashboardThemes } from './themes/dashboard.theme';
import { dialogTheme } from './themes/dialog.theme';
import { drawerTheme } from './themes/drawer.theme';
import { dropdownMenuTheme } from './themes/dropdown-menu.theme';
import { emptyTheme } from './themes/empty.theme';
import { errorTheme } from './themes/error.theme';
import { fieldGroupTheme } from './themes/field-group.theme';
import { fileUploadTheme } from './themes/file-upload.theme';
import { footerColumnsTheme } from './themes/footer-columns.theme';
import { footerTheme } from './themes/footer.theme';
import { formFieldTheme } from './themes/form-field.theme';
import { headerTheme } from './themes/header.theme';
import { inputDateTheme } from './themes/input-date.theme';
import { inputMenuTheme } from './themes/input-menu.theme';
import { inputNumberTheme } from './themes/input-number.theme';
import { inputTagsTheme } from './themes/input-tags.theme';
import { inputTimeTheme } from './themes/input-time.theme';
import { inputTheme } from './themes/input.theme';
import { kbdTheme } from './themes/kbd.theme';
import { linkTheme } from './themes/link.theme';
import { marqueeTheme } from './themes/marquee.theme';
import { navigationMenuTheme } from './themes/navigation-menu.theme';
import { paginationTheme } from './themes/pagination.theme';
import { pinInputTheme } from './themes/pin-input.theme';
import { popoverTheme } from './themes/popover.theme';
import { progressTheme } from './themes/progress.theme';
import { proseTheme } from './themes/prose.theme';
import { radioGroupTheme } from './themes/radio-group.theme';
import { selectMenuTheme } from './themes/select-menu.theme';
import { selectTheme } from './themes/select.theme';
import { separatorTheme } from './themes/separator.theme';
import { slideoverTheme } from './themes/slideover.theme';
import { sliderTheme } from './themes/slider.theme';
import { stepperTheme } from './themes/stepper.theme';
import { switchTheme } from './themes/switch.theme';
import { tableTheme } from './themes/table.theme';
import { tabsTheme } from './themes/tabs.theme';
import { textAreaTheme } from './themes/textarea.theme';
import { timelineTheme } from './themes/timeline.theme';
import { toasterTheme, toastTheme } from './themes/toast.theme';
import { tooltipTheme } from './themes/tooltip.theme';
import { treeTheme } from './themes/tree.theme';
import { userTheme } from './themes/user.theme';

export default defineAppConfig({
  pohon: {
    accordion: accordionTheme,
    alert: alertTheme,
    avatar: avatarTheme,
    avatarGroup: avatarGroupTheme,
    badge: badgeTheme,
    banner: bannerTheme,
    breadcrumb: breadcrumbTheme,
    button: buttonTheme,
    calendar: calendarTheme,
    card: cardTheme,
    carousel: carouselTheme,
    checkbox: checkboxTheme,
    checkboxGroup: checkboxGroupTheme,
    chip: chipTheme,
    collapsible: {
      slots: {
        content: 'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden',
      },
    },
    colorPicker: colorPickerTheme,
    commandPalette: commandPaletteTheme,
    container: {
      base: 'w-full max-w-$pohon-container mx-auto px-4 sm:px-6 lg:px-8',
    },
    contentNavigation: contentNavigationTheme,
    contentSurround: contentSurroundTheme,
    contentToc: contentTocTheme,
    contextMenu: contextMenuTheme,
    contentSearch: contentSearchTheme,
    contentSearchButton: {
      slots: {
        trailing: 'hidden lg:flex items-center gap-0.5 ms-auto',
      },
    },
    ...dashboardThemes,
    dialog: dialogTheme,
    drawer: drawerTheme,
    dropdownMenu: dropdownMenuTheme,
    empty: emptyTheme,
    error: errorTheme,
    fieldGroup: fieldGroupTheme,
    fileUpload: fileUploadTheme,
    footer: footerTheme,
    footerColumns: footerColumnsTheme,
    formField: formFieldTheme,
    header: headerTheme,
    inputDate: inputDateTheme,
    inputMenu: inputMenuTheme,
    inputNumber: inputNumberTheme,
    inputTags: inputTagsTheme,
    inputTime: inputTimeTheme,
    input: inputTheme,
    kbd: kbdTheme,
    link: linkTheme,
    main: {
      base: 'min-h-[calc(100vh-var(--pohon-header-height))]',
    },
    marquee: marqueeTheme,
    navigationMenu: navigationMenuTheme,
    pagination: paginationTheme,
    pinInput: pinInputTheme,
    popover: popoverTheme,
    progress: progressTheme,
    radioGroup: radioGroupTheme,
    selectMenu: selectMenuTheme,
    select: selectTheme,
    separator: separatorTheme,
    skeleton: {
      base: 'animate-pulse rounded-md bg-background-elevated',
    },
    slideover: slideoverTheme,
    slider: sliderTheme,
    stepper: stepperTheme,
    switch: switchTheme,
    table: tableTheme,
    tabs: tabsTheme,
    textarea: textAreaTheme,
    timeline: timelineTheme,
    toast: toastTheme,
    toaster: toasterTheme,
    tooltip: tooltipTheme,
    tree: treeTheme,
    user: userTheme,

    prose: proseTheme,
  },
});
