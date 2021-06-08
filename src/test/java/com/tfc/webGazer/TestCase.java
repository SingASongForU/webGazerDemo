package com.tfc.webGazer;

import java.nio.charset.Charset;

/**
 * 不打日志的教训
 * 打日志啥事儿没有
 * 哪怕debug呢
 */
public class TestCase {
    public static void main(String[] args) {
        //10:47
        String hexstring="7b22535f72657475726e436f6465223a22453838383838222c22535f72657475726e4d7367223a22436f6465207b55706179516b707346696e6170697d207265666c65637420636f6e666967206e6f742065786973742c20506c6561736520636865636b2e227d";
        //11:34
        hexstring="7b22535f72657475726e436f6465223a22453838383836222c22535f72657475726e4d7367223a22436f6465207b55706179516b707346696e6170697d2063616c6c20686f7374736572766963652062757420657863657074696f6e2068617070656e65642e20526573704d7367203a206e756c6c227d";
        byte[] destByte = new byte[hexstring.length()/2];
        int j=0;
        for(int i=0;i<destByte.length;i++) {
            byte high = (byte) (Character.digit(hexstring.charAt(j), 16) & 0xff);
            byte low = (byte) (Character.digit(hexstring.charAt(j + 1), 16) & 0xff);
            destByte[i] = (byte) (high << 4 | low);
            j+=2;
        }
        System.err.println(new String(destByte, Charset.forName("UTF-8")));

    }
}
