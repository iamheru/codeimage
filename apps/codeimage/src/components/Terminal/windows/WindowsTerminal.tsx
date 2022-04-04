import {Component, Show} from 'solid-js';
import * as baseStyles from '../terminal.css';
import {BaseTerminalProps, TerminalHost} from '../TerminalHost';
import * as styles from './WindowsTerminal.css';
import {Box} from '../../../ui/Box/Box';
import {WindowsTerminalControls} from './WindowsTerminalControls';
import {TabIcon} from '../TabIcon';
import {Text} from '../../../ui/Text/Text';
import {TabName} from '../TabName';
import {exportExclude as _exportExclude} from '../../../core/directives/exportExclude';

export const exportExclude = _exportExclude;

export const WindowsTerminal: Component<BaseTerminalProps> = props => {
  return (
    <TerminalHost {...props} theme={styles.theme}>
      <Show when={props.showHeader}>
        <div
          class={baseStyles.header}
          data-theme-mode={props.darkMode ? 'dark' : 'light'}
          data-accent-visible={props.accentVisible}
        >
          <Show when={props.showTab}>
            <div
              use:exportExclude={!props.tabName?.length}
              class={baseStyles.tab({accent: props.accentVisible})}
            >
              <Show when={props.tabIcon}>
                {icon => <TabIcon content={icon} />}
              </Show>

              <Show
                fallback={
                  <Text size={'sm'}>{props.tabName ?? 'Untitled'}</Text>
                }
                when={!props.readonlyTab}
              >
                <TabName
                  readonly={false}
                  value={props.tabName ?? ''}
                  onValueChange={value => props.onTabChange?.(value)}
                />
              </Show>
            </div>
          </Show>

          <WindowsTerminalControls />
        </div>
      </Show>

      <Show when={props.children}>
        <div class={baseStyles.content}>
          <Box position={'relative'}>
            <div>{props.children}</div>
          </Box>
        </div>
      </Show>
    </TerminalHost>
  );
};
