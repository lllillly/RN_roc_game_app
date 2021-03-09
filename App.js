import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  /* 현재 디바이스의 width 값 가져오기 - Dimensions */
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const ROC_DATUM = ["가위", "바위", "보"];

const App = () => {
  const [tab, setTab] = useState(0);
  const [mineData, setMineData] = useState(`잠시만 기다려주세요.`);
  const [cpuData, setCpuData] = useState(`잠시만 기다려주세요.`);
  const [resultText, setResultText] = useState(``);

  const _getRandomNumber = () => Math.floor(Math.random() * 3);
  /* 0,1,2 중 랜덤한 숫자를 뽑아내어 소수점에서 내림 */

  const _startButtonClickHandler = (value) => {
    setTab(value);

    if (value === 0) {
      setMineData(`잠시만 기다려 주세요`);
      setCpuData(`잠시만 기다려 주세요`);
      setResultText(``);
    }
    if (value === 1) {
      const ran1 = _getRandomNumber();
      const ran2 = _getRandomNumber();

      const mine = ROC_DATUM[ran1];
      const cpu = ROC_DATUM[ran2];

      setMineData(mine);
      setCpuData(cpu);

      if (ran1 === ran2) {
        setResultText("사용자와 컴퓨터는 비겼습니다.");
        return;
      }
      if (ran1 === 0) {
        if (ran2 === 1) {
          setResultText("사용자는 컴퓨터에게 졌습니다");
          return;
        } else if (ran2 === 2) {
          setResultText("사용자는 컴퓨터에게 이겼습니다.");
          return;
        }
      }
      if (ran1 === 1) {
        if (ran2 === 0) {
          setResultText("사용자는 컴퓨터에게 이겼습니다.");
          return;
        } else if (ran2 === 2) {
          setResultText("사용자는 컴퓨터에게 졌습니다");
          return;
        }
      }
      if (ran1 === 2) {
        if (ran2 === 0) {
          setResultText("사용자는 컴퓨터에게 졌습니다");
          return;
        } else if (ran2 === 1) {
          setResultText("사용자는 컴퓨터에게 이겼습니다.");
          return;
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ingameArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnText}>Start Game</Text>
          </TouchableOpacity>
        )}
        {tab === 1 && (
          <View>
            <View style={styles.ingameTop}>
              <Text>{mineData}</Text>
            </View>
            <View style={styles.ingameMiddle}>
              <LinearGradient
                colors={["#353b48", "#7f8fa6"]}
                locations={[0.9, 0.1]}
                style={styles.vsView}
                start={[`left`, `right`]}
              >
                <Text style={styles.vsText}>VS</Text>
              </LinearGradient>
            </View>
            <View style={styles.ingameBottom}>
              <Text>{cpuData}</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.resultArea}>
        <View style={styles.resultAreaTop}>
          <Text>{resultText}</Text>
        </View>
        <View style={styles.resultAreaBottom}>
          {tab === 1 && (
            <TouchableOpacity
              style={styles.startBtn}
              onPressOut={() => _startButtonClickHandler(0)}
            >
              <Text style={styles.startBtnText}>RESTART!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

/* 삼항연산자 -> (조건식) ? true일 때 : false일 때 */
/* javascript optional -> (조건식) ? true라면 && ~~~ */
/* 속도는 삼항연산자가 더 빠름 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingameArea: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  resultArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: "#2f3640",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  resultAreaTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resultAreaBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ingameTop: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  ingameMiddle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  ingameBottom: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  vsView: {
    width: CURRENT_WIDTH,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  vsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default App;
